jhst.App = Backbone.Model.extend({
	_didScroll: false,

	initialize: function () {
		this.$og_image = $('#og_image');
		this.$og_url = $('#og_url');

		var that = this,
			jhst = window.jhst;

		this.config 	 = new jhst.Config;
		// this.dataStorage = new jhst.DataStorage;
		this.statistic 	 = new jhst.Statistic;

		this.router = new jhst.Router;
		this.pages 	= new jhst.PagesCollection;


		this.user = new jhst.User;
		jhst.user = this.user;
		
		this.auth = new jhst.Auth;

		
		// GLOBAL objects
		jhst.config = this.config;





		// Pages create
		// 404 page
		this.pages.add(new jhst.Page({
			name:'404',
			template:'pages/404-page'
		}));

		this.pages.add(new jhst.Page({
			name:'403',
			template:'pages/403-page'
		}));

		this.landing = new jhst.LandingPage({
			name: 'landing',
			template: 'pages/landing-page'
		});
		this.pages.add(this.landing);

		// Pages render on route
		this.router.on('404', function () {
			that.pages.getPage('404').render();
		});

		this.router.on('route', function (router, route, params) {
			console.log('route:' + router);
			
			if(this.router.route_passed > 1) {
				this.statistic.trackCurrentPageChange();
			}
			
			jhst.trigger('route', router, route, params);

			switch (router) {
				case 'er404': 
					this.pages.getPage('404').render();
					break;

				case 'er403':
					this.pages.getPage('403').render();
					break;

				case 'landing':
					if(jhst.is_authed()) {
						jhst.navigate('/items', {trigger: true});
					} else {
						this.landing.render({section: 0});
					}
					break;
				default:
					if(!!route[0] && !this.router.previousWasPopup()) {
					}
					break;
			}

			this.trigger('need:meta:update');
		}, this);

		

		

		// Clear pages - sleep
		this.router.on('reset', function (prev_route, dest_route) {
			console.log(prev_route, dest_route)

			if(!this.router.isPopup(dest_route)) {
				if(!this.router.isPopup(prev_route)) {
					// Magic scroll to top onchange page
					jhst.speedScrollTop(0, 1);
				}

				switch (prev_route) {
					case 'landing':
						console.log('reset:landing');
						this.landing.sleep();
						break;

					default:
						break;
				}
			}

			// every page sleeps when we quit popup
			if(this.router.isPopup(prev_route)) {

				_.forEach(this.pages.models, function(page, i) {
					if(!!page.sleep && page.get('name') != dest_route) {
						page.sleep();
					}
				})
			}

		}, this);

		this.on('need:meta:update', function(){
			this.$og_url.attr('content', window.location.href);
		}, this);


		jhst.on('historyback', function(){
			jhst.navigate(this.router.back_path, {trigger: true});
		}, this);


		jhst.on('historyback:reload', function(){
			jhst.trigger('historyback');
			window.location.reload();
		}, this);


		jhst.on('auth:clear', function(){
			jhst.navigate('/logout', {trigger: true});
		});

		jhst.on('link:delete', function(){
			jhst.navigate('/items', {trigger: true});
		});


		jhst.on("feedback:show", function (options) {
			options = options || {};
			if(jhst.is_authed()) {
				var usersettings = jhst.user.settings.toJSON();
				options = _.extend({
					email: 	usersettings.email,
					name: 	usersettings.name,
				}, options);
			}
			new jhst.Feedback(options);
			return true;
		});



		// this.router.on('reset', function(prev, destination){
		// 	var prevPage = this.pages.getPage(prev)
		// 	if(this.pages.havePage(prev)){
		// 		this.pages.getPage(prev).remove();	
		// 	}
		// }, this);

		






		/**
		 * Global event list
		 */
		// 'twitter:hi', 	{token, uid, secret} - twitter auth success ;
		// 'vkontakte:hi', 	{token, uid} - vkontakte auth success
		// 'vkontakte:linker:hi', {token, uid} - strange sheet from vkontakte;
		this.on('twitter:hi', function (user_obj) {
			this.auth.trigger('twitter:hi', user_obj);
		}, this);

		this.on('vkontakte:hi', function (user_obj) {
			this.auth.trigger('vkontakte:hi', user_obj);
		}, this);
		
		this.on('error', function (err) {
			console.error('error');
			if(!!err && !!err.description) {
				jhst.error(err.description);
			}
		});


		/**
		 * Global event casting
		 */

		/**
		 * USER AUTH EVENTS
		 */

		this.auth.on('auth:success', function (user_obj) {
			jhst.trigger('auth:success', user_obj);
			console.log(this.router.current_route)
			if(this.router.current_route  !== 'profile' 
				&& (
					this.router.current_route  === 'landing' 
				 || this.router.current_route  === ''
				 )
			) {
				jhst.navigate('/items', {trigger: true});
			}
		}, this);
		this.auth.on('auth:clear', function () {
			jhst.trigger('auth:clear');
		}, this);

		/**
		 * Scroll handler
		 */
		var $win = $(window),
			$doc = $(document);

		$(window).scroll(function(){
			var s_top = $win.scrollTop(),
				d_h = $doc.height(),
				w_h = $win.height();
			jhst.trigger('scroll', {
				s_top: s_top,
				d_h: d_h,
				w_h: w_h
			});
			if( s_top+150 >= (d_h - w_h) ) {
				jhst.trigger('pagebottom:reached');
			}
		});

		if(!jhst.is_authed()) {
			// this.navbar.show();
		}


		/**
		 * APPLICATION READY
		 */
		jhst.trigger('app:init');
	},
});
