if (typeof console == "undefined") {this.console = {log: function() {}, error: function() {}};}
if(_.browser.chrome) {
	['log', 'warn'].forEach(function(method) {
		var old = console[method];
		console[method] = function() {
			var stack = (new Error()).stack.split(/\n/);
			// Chrome includes a single "Error" line, FF doesn't.
			if (stack[0].indexOf('Error') === 0) {
				stack = stack.slice(1);
			}
			var args = [].slice.apply(arguments).concat([stack[1].trim()]);
			return old.apply(console, args);
		};
	});
}
window.jhst = window.jhst || {};
window.jhst = _.extend(window.jhst, {
	// language: _.getCookie('lang') || (navigator.language || navigator.systemLanguage || navigator.browserLanguage || navigator.userLanguage || 'en').substr(0, 2).toLowerCase(),
	language: _.getCookie('lang') || 'ru',
	root: "http://jhstoq.me",
	l10n: {},

	preloadTemplates: function(){
		if(!!window.jhst_dev) {
			var files = [];
			_.each(window.templates.files, function(templateName){
				var file = window.templates.path + "/" + templateName + "." + window.templates.ext;
				files.push( $.get(file, function(templateData){
					jhst.Templates.add(templateName, templateData);
				}));
			});
			return files;
		} else {
			return [];
		}
	},
	init: function() {
		// if(!(this.language === 'en' || this.language === 'ru' || this.language === 'ko' || this.language === 'ja' || this.language === 'zh')) {
		if(!(
			this.language === 'en' || this.language === 'ru'
		 )) {
			this.language = 'en';
		}

		$.when.apply(this, this.preloadTemplates())
			.done(function(){
				/**
				 * jhst app initialization
				 */
				jhst.app = new jhst.App({ 
					debug: true,
				});
				// Init Backbone history
				Backbone.history.start({pushState: true});

			});

		// Catch links and trigger router
		$(document).on("click", "a", function(e){
			if (e.metaKey || e.ctrlKey) return true;
			var $this = $(this);
			if($this.attr("target") || $this.attr('href').indexOf('mailto:')!==-1) return true;
			
			e.stopPropagation();
			e.preventDefault();

			if($this.attr('type') == 'event') {
				jhst.trigger($this.attr('href'));
			} else {
				jhst.app.router.context = $this.data();
				jhst.app.router.navigate($this.attr("href"), {trigger: true});
			}
			return false;
		});
	},

	log: function (txt) {
		console.log(txt);
	},
	error: function(desc) {
		console.error(desc);
	},
	navigate: function (path, options) {
		if(!!options && options.trigger === false) {
			jhst.app.statistic.trackCurrentPageChange();
			jhst.app.trigger('need:meta:update');
		}
		jhst.app.router.navigate(path, options);
	},

	is_needauth: function() {
		if(!jhst.is_authed()) {
			jhst.trigger("auth:show");
			return true;
		} else {
			return false;
		}
	},

	is_authed: function() {
		return (!!jhst.user && jhst.user.is_auth());
	},

	is_authset: function() {
		return (!!jhst.user && jhst.user.is_authset());
	},

	authUrl: function(url) {
		var credentials = {};
		if(!!jhst.app && !!jhst.app.user.get("token")) {
			credentials = {
				token: jhst.app.user.get("token")
			}
		} else {
			return url;
		}

		if(url.indexOf('?')==-1) {
			url+='?';
		}
		return url + _.map(credentials, function(value, key){ return key+"="+value}).join("&")
	},

	warning: function(phrase, context){
		var wrn = new jhst.WarningView({content: jhst.localize(phrase, context)});
	},

	localize: function(phrase, context) {
		return Handlebars.helpers._(phrase, context).toString();
	},

	speedScrollTop: function(s_t, time) {
		$("html, body").animate({ 
			scrollTop: s_t || 0 
		}, time || 300);
	},

	// TODO state detection has to be more clear
	isLink: function(txt) {
		return !jhst.isFile(txt);
	},

	isFile: function(txt) {
		txt = txt || '';
		return txt.indexOf('jhstoq.me')!==-1;
	}
});

window.jhst.Templates = window.jhst.Templates || {};
window.jhst.Templates =  _.extend(
	window.jhst.Templates,
	{
		templates: {},
		compiled: {},
		// ptemplates: {},
		add: function(name, template){
			this.templates[name] = template;
		},
		get: function(name){
			// if it is dev environment - compile on runtime
			if(!!window.jhst_dev) {			
				if(this.compiled[name]){
					return this.templates[name];
				}else if(this.templates[name]){
					this.templates[name] = Handlebars.compile(this.templates[name]);
					this.compiled[name] = true;
					return this.templates[name];
				}else{
					console.error("Can't find template \"" + name + "\"");
					return function(){ return "" }
				}
			} else {
			// if it is prod environment - get from precompiled
				if(this.ptemplates) {
					var ptemplate = this.ptemplates[name];
					if(ptemplate) {
						return ptemplate;
					} else {
						console.error("Can't find template \"" + name + "\"");
						return function() { return "" }
					}
				} else {
					console.error("Can't find templates at all");
					return function() { return "" }
				}
			}
		}
	}
);

Backbone._sync = Backbone.sync;

Backbone.sync = function(method, model, options){
	options = options || {};
	var credentials = {};
	if(options.userData){
		credentials = {
			// uid: options.userData.uid,
			token: options.userData.token,
			lang: jhst.language
		}
	}else{
		credentials = {
			lang: 	jhst.language
		};
		
		if(!!jhst.app && !!jhst.app.user.get("uid")) {
			credentials.token = jhst.app.user.get("token");
		}
	}
	options.url = (options.url || (model.url && _.result(model, 'url')));
	if(options.url.indexOf('?')===-1) {
		options.url += '?';
	} else {
		options.url += '&';
	}
	options.url += _.map(credentials, function(value, key){ return key+"="+value}).join("&");
    return Backbone._sync(method, model, options);
}

$(document).ready(function(){
	_.extend(jhst, Backbone.Events);
	jhst.init();

	// $(document).on('keyup', function(e){console.log(e)})
});


window.onerror = function(message, file, line) {
  _gaq.push(['_trackEvent', "Landing", "Exception",  file + "(" + line + "): " + message + ':' + location.search])
}