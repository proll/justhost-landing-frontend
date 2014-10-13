jhst.FeedbackView = Backbone.View.extend({
	template: "popups/feedback",
	rendered: false,
	className: 'feedback',

	events: {
		// unmark all error inputs 
		'keypress': 'hideErrors',
		'click': 	'hideErrors',

		"submit .feedback__form": "submit",

		'click .feedback__close': 'remove'
	},

	initialize: function(options){
		this.model = options.model;
		this.template = jhst.Templates.get(this.model.get('template') || this.template);
		this.render();
	},

	render: function(){
		this.rendered = true;
		this.$el.append( this.template(this.model.toJSON()));

		this.popup_view = new jhst.PopupView({klass: "feedback-popup"});
		this.popup_view.on('hide', this.remove, this);
		this.popup_view.setContent(this.$el);
		this.popup_view.show();



		this.$form = 			this.$el.find(".feedback__form");
		this.$input_email = 	this.$form.find('input[name=email]');

		this.model.on("error", this.error, this);
	},

	showSuccess: function(model, state) {
		this.$el.toggleClass('success', true);
		return false;
	},

	submit: function (e) {
		var email = 	$.trim(this.$input_email.val());
		// validation
		if(!_.isEmail(email)) {
			this.showError()
		} else if (email.length > 50){
			this.showError()
		} else {
			this.showSuccess();
			return true;
		}
		e.preventDefault();
		e.stopPropagation();
		jhst.app.statistic.trackLandingBtnPup();
		return false;
	},

	error: function(error) {
		this.showError();
	},


	showError: function(txt, input_name) {
		this.$input_email.focus();
		this.$el.toggleClass('error', true);
		jhst.app.statistic.trackLandingSubmitError();
		return true;
	},
	
	hideErrors: function() {
		this.$el.toggleClass('error', false);
		return true;
	},


	clear: function() {
		this.hideErrors();
		this.$input_email.val('');
	},

	remove: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.model.off(null, null, this);
		this.popup_view.unlockPage();
		this.popup_view.remove();

		delete this.popup_view;

		this.model.clear({silent: true});
		return Backbone.View.prototype.remove.call(this, null);
	}
});