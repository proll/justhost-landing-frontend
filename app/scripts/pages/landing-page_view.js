jhst.LandingPageView = jhst.PageView.extend({
	$window: $(window),
	events: {
		'click .landing__toggler': 'toggleFeatures',

		'click .landing__header-btn': 'showFeedback1',
		'click .landing__s2_col2-a': 'showFeedback2',

		'click .landing__review-right': 'slideRight',
		'click .landing__review-left': 'slideLeft',

		'submit .landing__email-form': 'submit',
		'keypress .landing__email-inp': 'hideErrors',
	},


	render: function(){
		if (this.renderedHtml) {
			this.$el.append(this.renderedHtml);
		} else {
			var tmpDiv = $('<div></div>')
				.addClass('page-' + this.model.get('name'))
				.html(this.template(this.model.toJSON()));
			this.trigger("page:preRender", tmpDiv);
			this.$el.html(tmpDiv);
		}


		$('body').attr('class', 'body__page-' + this.model.get('name'));

		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.model.enterDocument();
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);

		jhst.on('scroll', this.fixHeader, this);

		this.$window.on('resize.landing.page', _.bind(this.repositionPage, this));

		this.$sec1 = 	this.$el.find('.landing-section1');
		this.$toggler = this.$el.find('.landing__toggler');

		var $slideItems = this.$el.find('.landing__review');
		this.slide_cnt = $slideItems.length;
		this.$slideItem = $slideItems.eq(0);
		this.slide_width = this.$slideItem.outerWidth();

		this.$input_email = this.$el.find('.landing__email-inp');

		this.repositionPage();

		this.delegateEvents();

		if(this.model.get('section')!==0) {
			if(this.model.get('section') === 2) {
				this.goSection2();
			} else if(this.model.get('section') === 3) {
				this.goSection3();
			}
		}
	},

	repositionPage: function() {
		var h = 0,
			ww = $(window).width();

		h = this.$window.innerHeight();
		var section_h = Math.max(h - 250, 230);
		section_h = Math.min(section_h, 500);
		this.$sec1.height(section_h);
		// this.$sec2.css({'margin-top': section_h});
	},

	toggleFeatures: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
		}

		if(!this.$el.hasClass('toggle_on')) {
			jhst.app.statistic.trackLandingDetails();
		}
		this.$el.toggleClass('toggle_on');

		return false;
	},

	showAuth: function() {
		this.model.showAuth();
		return false;
	},

	fixHeader: function(pos_obj) {
		this.$el.toggleClass('scrolled', (pos_obj.s_top > 80));
	},

	showFeedback1: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
		}
		jhst.app.statistic.trackLandingBtn1();
		this.showFeedback({
			metric: 'feedback', 
			template: 'popups/registration'
		});
		return false;
	},

	showFeedback2: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
		}
		jhst.app.statistic.trackLandingBtn2();
		this.showFeedback({
			metric: 'feedback', 
			template: 'popups/feedback'
		});
		return false;
	},

	showFeedback: function(params) {
		this.order = new jhst.Feedback(params);
	},

	slideRight: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
		}

		var num = this.$slideItem.data('num') || 0;
		if(num+1 < this.slide_cnt) {
			num = num + 1;
		} else {
			num = 0;
		}

		this.$slideItem
			.data('num', num)
			.css({
				'margin-left': -this.slide_width * num
			});

		return false;	
	},

	slideLeft: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
		}

		var num = this.$slideItem.data('num') || 0;
		if(num-1 > -1) {
			num = num - 1;
		} else {
			num = this.slide_cnt-1;
		}

		this.$slideItem
			.data('num', num)
			.css({
				'margin-left': -this.slide_width * num
			});

		return false;
	},


	submit: function (e) {
		this.hideErrors();

		var email = 	$.trim(this.$input_email.val());
		// validation
		if(!_.isEmail(email)) {
			this.showError()
		} else if (email.length > 50){
			this.showError()
		} else {
			return true;
		}
		e.preventDefault();
		e.stopPropagation();
		jhst.app.statistic.trackLandingBtn3();
		return false;
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


	sleep: function() {
		jhst.off(null, null, this);
		this.$window.off('resize.landing.page');
		this.undelegateEvents();
	}
});