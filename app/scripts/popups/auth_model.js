jhst.Auth = Backbone.Model.extend({
	vk_user_obj: {},
	defaults: {
		state: ''
	},

	initialize: function (){

		this.FB  = new jhst.FB();
		// this.TW  = new jhst.TW({url:"/api/auth/", url_token:"/api/auth/twitter/request_token/"});
		this.VK  = new jhst.VK();
		this.signin 		= new jhst.Signin();
		this.registration 	= new jhst.Registration();
		this.emailconfirm 	= new jhst.EmailConfirm();

		// this.on("twitter:hi", function (user_obj) {
		// 	this.TW.fetch(user_obj);
		// }, this);

		this.on("vkontakte:hi", function (user_obj) {
			this.VK.fetch(user_obj);
		}, this);

		this.FB.on 			("auth:success", this.authSuccess, this);
		// this.TW.on 			("auth:success", this.authSuccess, this);
		this.VK.on 			("auth:success", this.checkVKEmail, this);
		this.signin.on		("auth:success", this.authSuccess, this);
		this.registration.on("auth:success", this.authSuccess, this);
		this.emailconfirm.on("auth:success", this.authSuccess, this);

		this.registration.on("auth:success", this.authSuccess, this);
		this.registration.on("registration:success", this.afterRegistration, this);


		this.FB.on 			("error", this.error, this);
		// this.TW.on 			("error", this.error, this);
		this.VK.on 			("error", this.error, this);
		this.signin.on		("error", this.error, this);
		this.registration.on("error", this.error, this);

		// TODO: вынести отсюда jhst.navigate
		// this.registration.on("registration:pending", function (user_obj) {
		// 	jhst.navigate("/confirmation/"+user_obj.login, {trigger: true});
		// }, this);
		this.registration.on("registration:success", function () {
			// jhst.navigate("/findfriends");
			jhst.navigate("/", {trigger: true});
		}, this);

		jhst.on("auth:show", function (options) {
			console.log("auth:show");
			if(jhst.is_authed()) {
				jhst.navigate('/', {trigger: true});
				return false;
			}
			this.set('state', 'signup');
			this.view = new jhst.AuthView({model: this});
			this.trigger("auth:show", options)
		}, this)

		jhst.on("navbar:logout", function () {
			this.logout();
		}, this)

	},

	authSuccess: function(user_obj) {
		if(!!user_obj.session) {
			this.trigger("auth:success", user_obj);
		}
	},

	checkVKEmail: function(user_obj) {
		if(	user_obj.user && 
			user_obj.user.email && 
			user_obj.user.email.indexOf('@vk.com')!==-1) {
			this.set('state', 'emailconfirm');
			this.emailconfirm.set({
				user_obj: user_obj
			});
		} else {
			this.authSuccess(user_obj);
		}
	},

	afterRegistration: function() {
		jhst.app.statistic.trackRegistration();
	},

	logout: function(){
		this.trigger("auth:clear");
	},

	error:function (err) {
		this.trigger("error",err);
	}
});