jhst.LandingPage = jhst.Page.extend({
	visited: false,
	defaults: {
		img_num: 0,
		lang: 'en',
	},

	initialize: function(options){
		this.set('lang', jhst.language);
		options 		= options || {};
		// this.set('img_num', Math.round(Math.random()*3))
	},

	render: function(options) {
		this.set(options);
		if(!this.visited) {
			this.visited = true;
			this.view = new jhst.LandingPageView({
				model: this, 
				template:"pages/landing-page"
			});
			this.view.render();
		} else {
			this.view.render();
		}
	},


	showAuth: function() {
		jhst.trigger("auth:show");
	},


	sleep: function () {
		if(this.view) this.view.sleep();
	}
});