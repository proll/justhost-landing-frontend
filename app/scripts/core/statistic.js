jhst.Statistic = Backbone.Model.extend({
	yaCounter: null,
	gaCounter: null,

	initialize : function() {
		this.active = !_.browser.phantom;
	},

	trackCurrentPageChange : function(_url) {
		if(!this.active) return false;
		this.trackPageChange(window.location.pathname);
		return true;
	},

	trackPageChange : function(_url) {
		if(!this.active) return false;
		var str = (_url).toString();
		if (str.charAt(0)!="/") {
			str = "/"+str;
		}
		if(window._gaq) {
			window._gaq.push(['_trackPageview', str]);
		}
		
		if(window.yaCounter26254773) {
			window.yaCounter26254773.hit(jhst.root + str);
		}
	},

	trackLandingDetails: function() {
		if(!this.active) return false;
		window._gaq.push(['_trackEvent', 'Landing', 'show_details']);
		window.yaCounter26254773.reachGoal('Landing_show_details');
	},

	trackLandingBtn1: function() {
		if(!this.active) return false;
		window._gaq.push(['_trackEvent', 'Landing', 'click_btn_1']);
		window.yaCounter26254773.reachGoal('Landing_click_btn_1');
	},

	trackLandingBtn2: function() {
		if(!this.active) return false;
		window._gaq.push(['_trackEvent', 'Landing', 'click_btn_2']);
		window.yaCounter26254773.reachGoal('Landing_click_btn_2');
	},

	trackLandingBtn3: function() {
		if(!this.active) return false;
		window._gaq.push(['_trackEvent', 'Landing', 'click_btn_3']);
		window.yaCounter26254773.reachGoal('Landing_click_btn_3');
	},

	trackLandingBtnPup: function(metric) {
		if(!this.active) return false;
		if(metric === 'feedback') {
			window._gaq.push(['_trackEvent', 'Landing', 'click_btn_pup']);
			window.yaCounter26254773.reachGoal('Landing_click_btn_pup');
		} else {
			window._gaq.push(['_trackEvent', 'Landing', 'click_btn_pup_reg']);
			window.yaCounter26254773.reachGoal('Landing_click_btn_pup_reg');
		}
	},

	trackLandingSubmitError: function() {
		if(!this.active) return false;
		window._gaq.push(['_trackEvent', 'Landing', 'submit_error']);
		window.yaCounter26254773.reachGoal('Landing_submit_error');
	},
});