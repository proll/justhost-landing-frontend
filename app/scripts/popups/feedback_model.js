jhst.Feedback = Backbone.Model.extend({
	url: '/v1/feedback/',
	defaults: {
		email: '',
		phone: '',
		name: '',

		business_statistics: false,
	},

	initialize: function (){
		this.view = new jhst.FeedbackView({model: this});
	},

	fetch: function(data) {
		var options = {};
		options.url = this.url;
		options.type = 'post';
		options.data = options.data || data;
		options.data.message = 'Connect ' + options.data.name;
		delete options.data.name;

		if(jhst.lang === 'ru') {
			if(this.get('business_statistics')) {
				data.subject = "Qstoq.Бизнес - заявка на подключение";
			} else {
				data.subject = "Qstoq.Ценники - cообщение в техподдержку";
			}
		} else {
			if(this.get('business_statistics')) {
				data.subject = "Qstoq.Business - connection request";
			} else {
				data.subject = "Qstoq.Pricetags - feedback message";
			}
		}

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function(user_obj) {
		this.trigger("success", user_obj);
		
		if(this.get('business_statistics')) {
			jhst.app.statistic.trackBusinessFeedback();
		} else {
			jhst.app.statistic.trackFeedback();
		}
	},

	error:function (err) {
		this.trigger("error",err);
	},

});