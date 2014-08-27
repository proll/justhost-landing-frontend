this["jhst"] = this["jhst"] || {};
this["jhst"]["Templates"] = this["jhst"]["Templates"] || {};
this["jhst"]["Templates"]["ptemplates"] = this["jhst"]["Templates"]["ptemplates"] || {};

this["jhst"]["Templates"]["ptemplates"]["pages/403-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"error-page__description\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phr001", "p403", options) : helperMissing.call(depth0, "_", "phr001", "p403", options)))
    + "</p>";
  return buffer;
  });

this["jhst"]["Templates"]["ptemplates"]["pages/404-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"error-page__list\">\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Make sure that URL entered correctly;", "p404", options) : helperMissing.call(depth0, "_", "Make sure that URL entered correctly;", "p404", options)))
    + "</li>\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or drop us a line to <a href=\"mailto:support@jhstoq.me\" class=\"lnk\">support@jhstoq.me.</a>", "p404", options) : helperMissing.call(depth0, "_", "or drop us a line to <a href=\"mailto:support@jhstoq.me\" class=\"lnk\">support@jhstoq.me.</a>", "p404", options)))
    + "</li>\n</ul>";
  return buffer;
  });

this["jhst"]["Templates"]["ptemplates"]["pages/landing-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<section class=\"landing-section landing-section1\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h1 class=\"landing__h1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get payments online<br/>for what ever and where ever you want", "landing_page", options) : helperMissing.call(depth0, "_", "Get payments online<br/>for what ever and where ever you want", "landing_page", options)))
    + "</h1>\n			<p class=\"landing-section1-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section1-p", "landing_page", options)))
    + "</p>\n			<div class=\"landing__start\">\n				<a href=\"/auth\" class=\"landing__start-a\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Start", "landing_page", options) : helperMissing.call(depth0, "_", "Start", "landing_page", options)))
    + "</a>\n\n				<div class=\"landing__start-example\">\n					<i class=\"ib ib-pt\"></i><a href=\"http://s.jhstoq.me/b877\" target=\"_blank\" class=\"landing__start-example-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Pricetag example", "landing_page", options) : helperMissing.call(depth0, "_", "Pricetag example", "landing_page", options)))
    + "</a>\n				</div>\n			</div>\n\n		</div>\n	</div>\n	<a href=\"/next\" class=\"landing__next-a\" rel=\"nofollow\">\n		<span class=\"landing__next-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does it work", "landing_page", options) : helperMissing.call(depth0, "_", "How does it work", "landing_page", options)))
    + "</span>\n		<i class=\"ib ib-arr\"></i>\n	</a>\n</section>\n<section class=\"landing-section landing-section2\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does Justhost work", "landing_page", options) : helperMissing.call(depth0, "_", "How does Justhost work", "landing_page", options)))
    + "</h2>\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-l1\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect your payment systems", "landing_page", options) : helperMissing.call(depth0, "_", "Connect your payment systems", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-0-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-0-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-l2\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Create a price tag", "landing_page", options) : helperMissing.call(depth0, "_", "Create a price tag", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-l3\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Publish the link", "landing_page", options) : helperMissing.call(depth0, "_", "Publish the link", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section3\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get payments in any cases", "landing_page", options) : helperMissing.call(depth0, "_", "Get payments in any cases", "landing_page", options)))
    + "</h2>\n			<p class=\"landing-section3-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-p", "landing_page", options)))
    + "</p>\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li1\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Donate", "landing_page", options) : helperMissing.call(depth0, "_", "Donate", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li2\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Payments for digital content", "landing_page", options) : helperMissing.call(depth0, "_", "Payments for digital content", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li3\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Selling reallife goods", "landing_page", options) : helperMissing.call(depth0, "_", "Selling reallife goods", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-3-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-3-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li4\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Freelance and services", "landing_page", options) : helperMissing.call(depth0, "_", "Freelance and services", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-4-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-4-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li5\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Group buying", "landing_page", options) : helperMissing.call(depth0, "_", "Group buying", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-5-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-5-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li6\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Charity", "landing_page", options) : helperMissing.call(depth0, "_", "Charity", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-6-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-6-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li7\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-learning and consultations", "landing_page", options) : helperMissing.call(depth0, "_", "E-learning and consultations", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-7-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-7-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li8\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "And much more", "landing_page", options) : helperMissing.call(depth0, "_", "And much more", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-8-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-8-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section4\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Fast", "landing_page", options) : helperMissing.call(depth0, "_", "Fast", "landing_page", options)))
    + "</h3>\n					<i class=\"ib ib-l4_1\"></i>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section4-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section4-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cozy", "landing_page", options) : helperMissing.call(depth0, "_", "Cozy", "landing_page", options)))
    + "</h3>\n					<i class=\"ib ib-l4_2\"></i>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section4-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section4-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Free", "landing_page", options) : helperMissing.call(depth0, "_", "Free", "landing_page", options)))
    + "</h3>\n					<i class=\"ib ib-l4_3\"></i>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section4-3-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section4-3-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n			<div class=\"landing__start-cont\"><a href=\"/auth\" rel=\"nofollow\" class=\"landing__start-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Start Justhost", "landing_page", options) : helperMissing.call(depth0, "_", "Start Justhost", "landing_page", options)))
    + "</a></div>\n		</div>\n	</div>\n</section>";
  return buffer;
  });

this["jhst"]["Templates"]["ptemplates"]["popups/auth"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"auth__cont\">\n	<div class=\"auth__social\">\n		<h2 class=\"auth__social-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Social log in", "auth", options) : helperMissing.call(depth0, "_", "Social log in", "auth", options)))
    + "</h2>\n		<ul class=\"auth__social-list\">\n			<li class=\"auth__social-item\"><a href=\"vk\" rel=\"nofollow\" class=\"auth__social-item-lnk auth__social-item-lnk_vk\"><i class=\"qi qi-share-vk auth__social-item-icn\"></i></a></li><li class=\"auth__social-item\"><a href=\"fb\" rel=\"nofollow\" class=\"auth__social-item-lnk auth__social-item-lnk_fb\"><i class=\"qi qi-share-fb auth__social-item-icn\"></i></a></li>\n		</ul>\n	</div>\n	<div class=\"auth__sign\">\n		<span class=\"auth__sign-toggler\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or", "auth", options) : helperMissing.call(depth0, "_", "or", "auth", options)))
    + " <a href=\"signup\" rel=\"nofollow\" class=\"auth__sign-toggler-lnk auth__sign-toggler_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sign up", "auth", options) : helperMissing.call(depth0, "_", "sign up", "auth", options)))
    + "</a>\n		<a href=\"signin\" rel=\"nofollow\" class=\"auth__sign-toggler-lnk auth__sign-toggler_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "log in by e-mail", "auth", options)))
    + "</a>\n		</span>\n		<h2 class=\"auth__sign-h auth__sign-h_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "Log in by e-mail", "auth", options)))
    + "</h2>\n		<h2 class=\"auth__sign-h auth__sign-h_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "</h2>\n		<h2 class=\"auth__sign-h auth__sign-h_emailconfirm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Enter your e-mail", "auth", options) : helperMissing.call(depth0, "_", "Enter your e-mail", "auth", options)))
    + "</h2>\n		<form action=\"/auth\" class=\"auth__sign-form\">\n			<div class=\"jhst__inp-group\">\n				<div class=\"jhst__inp-cont\">\n					<label>\n						<span class=\"jhst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "e-mail", "auth", options) : helperMissing.call(depth0, "_", "e-mail", "auth", options)))
    + "</span>\n						<div class=\"jhst__inp-cont-in\">\n							<input maxlength=\"50\" type=\"text\" class=\"jhst__inp\" name=\"login\" value=\"\">\n						</div>\n					</label>\n				</div>\n				<div class=\"jhst__inp-cont auth__sign-inp-name-cont\">\n					<label>\n						<span class=\"jhst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "name", "auth", options) : helperMissing.call(depth0, "_", "name", "auth", options)))
    + "</span>\n						<div class=\"jhst__inp-cont-in\">\n							<input maxlength=\"55\" type=\"text\" class=\"jhst__inp\" name=\"fio\" value=\"\">\n						</div>\n					</label>\n				</div>\n				<div class=\"jhst__inp-cont auth__sign-inp-password-cont\">\n					<label>\n						<span class=\"jhst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "password", "auth", options) : helperMissing.call(depth0, "_", "password", "auth", options)))
    + "</span>\n						<div class=\"jhst__inp-cont-in\">\n							<input maxlength=\"45\" type=\"password\" class=\"jhst__inp\" name=\"password\" value=\"\">\n						</div>\n					</label>\n				</div>\n			</div>\n			<div class=\"auth__sign-user-agreement\">\n				";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "I admit <a href=\"/i/user-agreement/\">user agreement</a>", "auth", options) : helperMissing.call(depth0, "_", "I admit <a href=\"/i/user-agreement/\">user agreement</a>", "auth", options)))
    + "\n			</div>\n			<input type=\"submit\" class=\"auth__sign-submit-hidden\">\n			<div class=\"auth__sign-submit\">\n				<span class=\"auth__sign-submit-error\"></span>\n				<a href=\"signin\" rel=\"nofollow\" class=\"auth__sign-submit-a auth__sign-submit_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "</a><a href=\"signup\" rel=\"nofollow\" class=\"auth__sign-submit-a auth__sign-submit_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "</a><a href=\"emailconfirm\" rel=\"nofollow\" class=\"auth__sign-submit-a auth__sign-submit_emailconfirm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "</a>\n			</div>\n		</form>\n	</div>\n</div>";
  return buffer;
  });

this["jhst"]["Templates"]["ptemplates"]["popups/confirm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"confirm__p\">";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<ul class=\"confirm__line\">\n	<li class=\"confirm__ok\">";
  if (stack1 = helpers.ok_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ok_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n	<li class=\"confirm__close\">";
  if (stack1 = helpers.close_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.close_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n</ul>\n<p class=\"confirm__p_success\">";
  if (stack1 = helpers.success_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.success_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"confirm__p_error\">";
  if (stack1 = helpers.error_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  });

this["jhst"]["Templates"]["ptemplates"]["popups/popup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"popup__table ";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n	<tr>\n		<td class=\"popup__td\">\n			<div class=\"popup__close\">\n				<div class=\"popup__close-col\">\n					<span class=\"close\">&times;</span>\n				</div>\n			</div>\n			<div class=\"popup__previous\">\n				<div class=\"popup__previous-col\">\n					<i class=\"prev\"></i>\n				</div>\n			</div>\n			<div class=\"popup__inner\">\n				<div class=\"popup__content\">\n					<i class=\"qi qi-popup-close popup__close-btn\"></i>\n					";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>";
  return buffer;
  });

this["jhst"]["Templates"]["ptemplates"]["popups/warning"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<h1 class=\"warning__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Warning!", "warning", options) : helperMissing.call(depth0, "_", "Warning!", "warning", options)))
    + "</h1>\n<p class=\"warning__p\">";
  if (stack2 = helpers.content) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.content; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<span class=\"warning__close\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "warning", options) : helperMissing.call(depth0, "_", "Ok", "warning", options)))
    + "</span>";
  return buffer;
  });