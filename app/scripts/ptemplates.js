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


  buffer += "<header class=\"landing__header\">\n	<div class=\"container\">\n		<div class=\"landing__header-info\">\n			<p class=\"landing__header-info-p1\">\n				<span class=\"landing__phone-col\">\n					<span class=\"landing_phone-city\">Россия</span>\n					8 800 100 60 09\n				</span>\n				<span class=\"landing__phone-col\">\n					<span class=\"landing_phone-city\">Москва</span>\n					+7 495 668 09 03\n				</span>\n			</p>\n			<p class=\"landing__header-info-p2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Лицензия №87316", "landing", options) : helperMissing.call(depth0, "_", "Лицензия №87316", "landing", options)))
    + "</p>\n		</div>\n		<a href=\"/\" target=\"_self\" class=\"landing__logo-a\"><div class=\"landing__logo\"></div></a>\n		<div class=\"landing__header-btn-cont\">\n			<p class=\"landing__header-btn-p\">\n				<span class=\"landing__phone-col\">\n					<span class=\"landing_phone-city\">Россия</span>\n					8 800 100 60 09\n				</span>\n				<span class=\"landing__phone-col\">\n					<span class=\"landing_phone-city\">Москва</span>\n					+7 495 668 09 03\n				</span>\n			</p>\n			<button class=\"landing__header-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Заказать хостинг", "landing", options) : helperMissing.call(depth0, "_", "Заказать хостинг", "landing", options)))
    + "</button>\n		</div>\n	</div>\n</header>\n<section class=\"landing-section landing-section1\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<i class=\"i i-inf\"></i>\n			<h1 class=\"landing__h1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Честный хостинг без тарифов и ограничений", "landing_page", options) : helperMissing.call(depth0, "_", "Честный хостинг без тарифов и ограничений", "landing_page", options)))
    + "</h1>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section2\">\n	<div class=\"landing__s2_col1\">\n		<div class=\"landing__s2_col1-in\">\n			<!-- <h2 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Тарифы?", "landing", options) : helperMissing.call(depth0, "_", "Тарифы?", "landing", options)))
    + "</h2> -->\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "В JustHost.ru нет тарифов — оплата по факту использования дискового пространства. Всё остальное без ограничений. Списание раз в сутки.", "landing", options) : helperMissing.call(depth0, "_", "В JustHost.ru нет тарифов — оплата по факту использования дискового пространства. Всё остальное без ограничений. Списание раз в сутки.", "landing", options)))
    + "</p>\n			<p class=\"landing__misc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Например, сайт на Wordpress обычно занимает 250 Мб и стоимость для такого сайта составит 20 рублей в месяц.", "landing", options) : helperMissing.call(depth0, "_", "Например, сайт на Wordpress обычно занимает 250 Мб и стоимость для такого сайта составит 20 рублей в месяц.", "landing", options)))
    + "</p>\n		</div>\n	</div>\n	<div class=\"landing__s2_col2\">\n		<div class=\"landing__s2_col2-in\">\n			<h2 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "8 копеек", "landing", options) : helperMissing.call(depth0, "_", "8 копеек", "landing", options)))
    + "</h2>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "за мегабайт в месяц", "landing", options) : helperMissing.call(depth0, "_", "за мегабайт в месяц", "landing", options)))
    + "</p>\n			"
    + "\n			<a href=\"register\" class=\"landing__s2_col2-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Получите <mark>бесплатно</mark> до 12 месяцев хостинга за перенос сайтов!", "landing", options) : helperMissing.call(depth0, "_", "Получите <mark>бесплатно</mark> до 12 месяцев хостинга за перенос сайтов!", "landing", options)))
    + "</a>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section3\">\n	<div class=\"landing__container\">\n		<div class=\"landing__block1\">\n			<h3 class=\"landing__h3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Все включено", "landing", options) : helperMissing.call(depth0, "_", "Все включено", "landing", options)))
    + "</h3>\n			<a href=\"toggle\" class=\"landing__toggler\">\n				<span class=\"landing__toggler-t1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Без подробностей", "landing", options) : helperMissing.call(depth0, "_", "Без подробностей", "landing", options)))
    + "</span><span class=\"landing__toggler-widget\"><div class=\"landing__toggler-pin\"></div></span><span class=\"landing__toggler-t2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Технические детали", "landing", options) : helperMissing.call(depth0, "_", "Технические детали", "landing", options)))
    + "</span>\n			</a>\n			<ul class=\"landing__s3-list\">\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Удобная панель управления", "landing", options) : helperMissing.call(depth0, "_", "Удобная панель управления", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Панель <strong>DirectAdmin</strong>", "landing", options) : helperMissing.call(depth0, "_", "Панель <strong>DirectAdmin</strong>", "landing", options)))
    + "</span></li>\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Бесплатный неограниченный трафик", "landing", options) : helperMissing.call(depth0, "_", "Бесплатный неограниченный трафик", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Поддержка <strong>IPv6</strong>", "landing", options) : helperMissing.call(depth0, "_", "Поддержка <strong>IPv6</strong>", "landing", options)))
    + "</span></li>\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Без тарифов, всё включено", "landing", options) : helperMissing.call(depth0, "_", "Без тарифов, всё включено", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Выделенные изолированные ресурсы", "landing", options) : helperMissing.call(depth0, "_", "Выделенные изолированные ресурсы", "landing", options)))
    + "</span></li>\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Используйте бесплатно 15 дней", "landing", options) : helperMissing.call(depth0, "_", "Используйте бесплатно 15 дней", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Кластерная облачная платформа", "landing", options) : helperMissing.call(depth0, "_", "Кластерная облачная платформа", "landing", options)))
    + "</span></li>\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Повышенная безопасность", "landing", options) : helperMissing.call(depth0, "_", "Повышенная безопасность", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Работают все популярные CMS", "landing", options) : helperMissing.call(depth0, "_", "Работают все популярные CMS", "landing", options)))
    + "</span></li>\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Любое количество сайтов и баз данных", "landing", options) : helperMissing.call(depth0, "_", "Любое количество сайтов и баз данных", "landing", options)))
    + "</span></li>\n				<li class=\"more adv\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Поддержка <strong>PHP</strong> 4.4, 5.2, 5.3, 5.4, 5.5, 5.6", "landing", options) : helperMissing.call(depth0, "_", "Поддержка <strong>PHP</strong> 4.4, 5.2, 5.3, 5.4, 5.5, 5.6", "landing", options)))
    + "</span><span class=\"landing__s3-itm-misc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "версию PHP вы можете выбрать в любой момент в панели управления", "landing", options) : helperMissing.call(depth0, "_", "версию PHP вы можете выбрать в любой момент в панели управления", "landing", options)))
    + "</span></li>\n				<li class=\"less\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Мягкая добрая техподдержка", "landing", options) : helperMissing.call(depth0, "_", "Мягкая добрая техподдержка", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "<strong>Perl</strong>, <strong>Python</strong>, <strong>SSI</strong>", "landing", options) : helperMissing.call(depth0, "_", "<strong>Perl</strong>, <strong>Python</strong>, <strong>SSI</strong>", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Базы данных <strong>MySQL</strong>", "landing", options) : helperMissing.call(depth0, "_", "Базы данных <strong>MySQL</strong>", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Бесплатный неограниченный трафик", "landing", options) : helperMissing.call(depth0, "_", "Бесплатный неограниченный трафик", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Доступ по протоколу <strong>SSH</strong> (shell)", "landing", options) : helperMissing.call(depth0, "_", "Доступ по протоколу <strong>SSH</strong> (shell)", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Паролирование директорий", "landing", options) : helperMissing.call(depth0, "_", "Паролирование директорий", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Поддержка выделенных IP-адресов (50 руб./шт.)", "landing", options) : helperMissing.call(depth0, "_", "Поддержка выделенных IP-адресов (50 руб./шт.)", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Поддержка <strong>SSL</strong>-сертификатов", "landing", options) : helperMissing.call(depth0, "_", "Поддержка <strong>SSL</strong>-сертификатов", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Файловый менеджер в панели управления", "landing", options) : helperMissing.call(depth0, "_", "Файловый менеджер в панели управления", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Автоматическое и ручное резервное копирование", "landing", options) : helperMissing.call(depth0, "_", "Автоматическое и ручное резервное копирование", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Система статистики <strong>Webalizer</strong>", "landing", options) : helperMissing.call(depth0, "_", "Система статистики <strong>Webalizer</strong>", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Веб-интерфейс для работы с почтой <strong>IonCube</strong>", "landing", options) : helperMissing.call(depth0, "_", "Веб-интерфейс для работы с почтой <strong>IonCube</strong>", "landing", options)))
    + "</span></li>\n				<li class=\"more\"><i class=\"i i-chk\"></i><span class=\"landing__s3-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Техническая поддержка 24 / 7 / 365", "landing", options) : helperMissing.call(depth0, "_", "Техническая поддержка 24 / 7 / 365", "landing", options)))
    + "</span></li>\n			</ul>\n		</div>\n		<div class=\"landing__block2\">\n			<div class=\"landing__block2-in1\">\n				<i class=\"i i-cloud\"></i>\n				<h4 class=\"landing__h3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Облачный хостинг", "landing", options) : helperMissing.call(depth0, "_", "Облачный хостинг", "landing", options)))
    + "</h4>\n				<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Благодаря технологии CloudLinux мы не ограничиваем количество сайтов, почтовых аккаунтов и баз данных. Более того, за счет виртуализации окружения каждого пользователя, многократно повышается уровень безопасности.", "landing", options) : helperMissing.call(depth0, "_", "Благодаря технологии CloudLinux мы не ограничиваем количество сайтов, почтовых аккаунтов и баз данных. Более того, за счет виртуализации окружения каждого пользователя, многократно повышается уровень безопасности.", "landing", options)))
    + "</p>\n			</div>\n			<div class=\"landing__block2-in2\">\n				<i class=\"i i-server\"></i>\n				<h4 class=\"landing__h3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Вычислительные ресурсы", "landing", options) : helperMissing.call(depth0, "_", "Вычислительные ресурсы", "landing", options)))
    + "</h4>\n				<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Каждому пользователю выделяется виртуальный компьютер со следующими параметрами: 2 GHz процессор и 1 Gb памяти для процессов (например, ваших PHP-скриптов). Нагрузка до 20 запросов в секунду.", "landing", options) : helperMissing.call(depth0, "_", "Каждому пользователю выделяется виртуальный компьютер со следующими параметрами: 2 GHz процессор и 1 Gb памяти для процессов (например, ваших PHP-скриптов). Нагрузка до 20 запросов в секунду.", "landing", options)))
    + "</p>\n			</div>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section7\">\n	<div class=\"landing__container\">\n		<h2 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Только живые отзывы", "landing", options) : helperMissing.call(depth0, "_", "Только живые отзывы", "landing", options)))
    + "</h2>\n		<div class=\"landing__reviews\">\n			<a href=\"left\" class=\"landing__review-left\"><i class=\"i i-arr-l\"></i></a>\n			<ul class=\"landing__review-list\">\n				<li class=\"landing__review\">\n					<p class=\"landing__p\">«Оборудование было размещено предельно быстро, после чего были некие проблемы с моим ПО, с решением которых мне безотказно и оперативно помогла тех. поддержка. Очень благодарен данному хостингу, и не на секунду не пожалел что выбрал именно его!»</p>\n					<div class=\"landing__review-desc\">\n						<span class=\"landing__review-author\">— Владислав Ладьин</span>\n						<a class=\"landing__review-a\" target=\"_blank\" href=\"http://hostdb.ru/providers/opinions/id/59\">http://hostdb.ru/providers/opinions/id/59</a>\n					</div>\n				</li>\n				<li class=\"landing__review\">\n					<p class=\"landing__p\">«За всё время обслуживания не заметил ни одной проблемы. Всё на высшем уровне за умеренную плату. К ним перешел с другого Vps (не буду рекламировать) и ни капли не жалею, так как это первый мой удачный хостинг без преувеличения. Очень благодарен ребятам из тех поддержки, выручали не один раз»</p>\n					<div class=\"landing__review-desc\">\n						<span class=\"landing__review-author\">— Артём Бирковский</span>\n						<a class=\"landing__review-a\"  target=\"_blank\" href=\"http://hostdb.ru/providers/opinions/id/59\">http://hostdb.ru/providers/opinions/id/59</a>\n					</div>\n				</li>\n				<li class=\"landing__review\">\n					<p class=\"landing__p\">«Отлично работают ребята. Тех.поддержка, вообще работает на 5 баллов. Скорость работы сайтов приятно радует. Ушел от прежнего хостера и перенес несколько сайтов на JustHost»</p>\n					<div class=\"landing__review-desc\">\n						<span class=\"landing__review-author\">— Рябов Дмитрий</span>\n						<a class=\"landing__review-a\"  target=\"_blank\" href=\"http://hostdb.ru/providers/opinions/id/59\">http://hostdb.ru/providers/opinions/id/59</a>\n					</div>\n				</li>\n				<li class=\"landing__review\">\n					<p class=\"landing__p\">«Хороший понятный хостинг. Техподдержка отвечает очень быстро и помогает разобраться буквально онлайн. Мне помогли разместить сайт и даже помогли внести исправления в PHP скрипты сайта. Очень доволен!	»</p>\n					<div class=\"landing__review-desc\">\n						<span class=\"landing__review-author\">— Игорь Николаевич</span>\n						<a class=\"landing__review-a\"  target=\"_blank\" href=\"http://hostdb.ru/providers/opinions/id/59\">http://hostdb.ru/providers/opinions/id/59</a>\n					</div>\n				</li>\n			</ul>\n			<a href=\"right\" class=\"landing__review-right\"><i class=\"i i-arr-r\"></i></a>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section5\">\n	<div class=\"landing__container\">\n		<div class=\"landing__s5-col1\">\n			<h3 class=\"landing__h3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Гарантия безотказной работы", "landing", options) : helperMissing.call(depth0, "_", "Гарантия безотказной работы", "landing", options)))
    + "</h3>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Наша техподдержка — это адекватные живые люди, которые всегда готовы помочь.  Мы не отправляем вас гуглить или изучать документацию, мы просто решаем вашу проблему.", "landing", options) : helperMissing.call(depth0, "_", "Наша техподдержка — это адекватные живые люди, которые всегда готовы помочь.  Мы не отправляем вас гуглить или изучать документацию, мы просто решаем вашу проблему.", "landing", options)))
    + "</p>\n		</div>\n		<div class=\"landing__s5-col2\">\n			<p class=\"landing__p\"><i class=\"i i-email\"></i><i class=\"i i-phone\"></i><span class=\"landing-sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "— Круглосуточно", "landing", options) : helperMissing.call(depth0, "_", "— Круглосуточно", "landing", options)))
    + "</span></p>\n			<p class=\"landing__p\"><i class=\"i i-icq\"></i><i class=\"i i-skp\"></i><span class=\"landing-sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "— пн–пт, 10:00–20:00", "landing", options) : helperMissing.call(depth0, "_", "— пн–пт, 10:00–20:00", "landing", options)))
    + "</span></p>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section4\">\n	<div class=\"landing__container\">\n		<i class=\"i i-clnd\"></i>\n		<div class=\"landing__s4-col\">\n			<h3 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Попробуйте бесплатно", "landing", options) : helperMissing.call(depth0, "_", "Попробуйте бесплатно", "landing", options)))
    + "</h3>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Получите хостинг сразу после заказа, а оплатить счет в личном кабинете можно в течение 15 дней. Домен можно не указывать, будет создан тестовый домен. Просто загрузите сайт и тестируйте 15 дней.", "landing", options) : helperMissing.call(depth0, "_", "Получите хостинг сразу после заказа, а оплатить счет в личном кабинете можно в течение 15 дней. Домен можно не указывать, будет создан тестовый домен. Просто загрузите сайт и тестируйте 15 дней.", "landing", options)))
    + "</p>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section8\">\n	<div class=\"landing__container\">\n		<h2 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Начать работу с Justhost", "landing", options) : helperMissing.call(depth0, "_", "Начать работу с Justhost", "landing", options)))
    + "</h2>\n		<form class=\"landing__email-form\" method=\"post\" action=\"/auth/new\">\n			<input type=\"text\" maxlength=\"100\" name=\"email\" class=\"landing__email-inp\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Введите емайл", "landing", options) : helperMissing.call(depth0, "_", "Введите емайл", "landing", options)))
    + "\">\n			<button class=\"landing__email-submit\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Продолжить", "landing", options) : helperMissing.call(depth0, "_", "Продолжить", "landing", options)))
    + "</button>\n			<p class=\"landing__email-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Тестовый период 15 дней", options) : helperMissing.call(depth0, "_", "Тестовый период 15 дней", options)))
    + "</p>\n		</form>\n	</div>\n</section>\n<section class=\"landing-section landing-section9\">\n	<div class=\"landing__container\">\n		<i class=\"i i-star\"></i>\n		<div class=\"landing__s9-col\">\n			<h3 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Дарим месяц хостинга за каждый перенесенный к нам сайт!", "landing", options) : helperMissing.call(depth0, "_", "Дарим месяц хостинга за каждый перенесенный к нам сайт!", "landing", options)))
    + "</h3>\n			<p class=\"landing__p\"><strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "При переносе к нам 1 сайта вы получите 1 месяц хостинга, а 12 либо более — целый год бесплатного хостинга!", "landing", options) : helperMissing.call(depth0, "_", "При переносе к нам 1 сайта вы получите 1 месяц хостинга, а 12 либо более — целый год бесплатного хостинга!", "landing", options)))
    + "</strong></p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Для участия в акции необходимо зарегистрироваться и в течении 15 дней перенести к нам на хостинг ваши сайты. Переносом будет считаться указание наших NS в Namesever ваших доменов.", "landing", options) : helperMissing.call(depth0, "_", "Для участия в акции необходимо зарегистрироваться и в течении 15 дней перенести к нам на хостинг ваши сайты. Переносом будет считаться указание наших NS в Namesever ваших доменов.", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Домены должны находиться на наших NS все время действия бесплатного периода.", "landing", options) : helperMissing.call(depth0, "_", "Домены должны находиться на наших NS все время действия бесплатного периода.", "landing", options)))
    + "</p>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section6\">\n	<div class=\"landing__container\">\n		<h2 class=\"landing__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "JustHost.ru — торговая марка компании Баксэт. С 2006 года на рынке хостинга", "landing", options) : helperMissing.call(depth0, "_", "JustHost.ru — торговая марка компании Баксэт. С 2006 года на рынке хостинга", "landing", options)))
    + "</h2>\n		<div class=\"landing__s6-logos\"><i class=\"i i-ripe\"></i><i class=\"i i-anders\"></i><i class=\"i i-ms\"></i><i class=\"i i-rosnano\"></i></div>\n		<div class=\"landing__s6-col1\">\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Получена <a href=\"\" target=\"_blank\">лицензия МинСвязи РФ №87316</a> на телематические услуги связи", "landing", options) : helperMissing.call(depth0, "_", "Получена <a href=\"\" target=\"_blank\">лицензия МинСвязи РФ №87316</a> на телематические услуги связи", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Сдан узел связи в соответствии с требованиями лицензии на телематические услуги связи", "landing", options) : helperMissing.call(depth0, "_", "Сдан узел связи в соответствии с требованиями лицензии на телематические услуги связи", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ООО «Баксэт» является партнером RIPE. Получен статус LIR (Local Internet Registry) <a href=\"https://www.ripe.net/membership/indices/data/ru.bxtgroup.html\" target=\"_blank\">https://www.ripe.net/membership/indices/data/ru.bxtgroup.html</a>", "landing", options) : helperMissing.call(depth0, "_", "ООО «Баксэт» является партнером RIPE. Получен статус LIR (Local Internet Registry) <a href=\"https://www.ripe.net/membership/indices/data/ru.bxtgroup.html\" target=\"_blank\">https://www.ripe.net/membership/indices/data/ru.bxtgroup.html</a>", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Используем инфраструктуру лучших датацентров Москвы: Anders и Ростелеком. Наше оборудование географически распределено, централизованное хранилище используется только под бэкапы", "landing", options) : helperMissing.call(depth0, "_", "Используем инфраструктуру лучших датацентров Москвы: Anders и Ростелеком. Наше оборудование географически распределено, централизованное хранилище используется только под бэкапы", "landing", options)))
    + "</p>\n		</div>\n		<div class=\"landing__s6-col2\">\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ООО «Баксэт» является SPLA-партнером Microsoft (No. OX 10-100 от 11.05.2010);", "landing", options) : helperMissing.call(depth0, "_", "ООО «Баксэт» является SPLA-партнером Microsoft (No. OX 10-100 от 11.05.2010);", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Блокируем сайты только по запросу МВД и решению суда;", "landing", options) : helperMissing.call(depth0, "_", "Блокируем сайты только по запросу МВД и решению суда;", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Вы всегда можете прийти к нам в офис по адресу: 124489, Москва, Зеленоград, Сосновая аллея, д. 4, стр. 2, оф. 120;", "landing", options) : helperMissing.call(depth0, "_", "Вы всегда можете прийти к нам в офис по адресу: 124489, Москва, Зеленоград, Сосновая аллея, д. 4, стр. 2, оф. 120;", "landing", options)))
    + "</p>\n			<p class=\"landing__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Круглосуточная поддержка по email и телефону, а так же по ICQ и Skype в рабочее время.", "landing", options) : helperMissing.call(depth0, "_", "Круглосуточная поддержка по email и телефону, а так же по ICQ и Skype в рабочее время.", "landing", options)))
    + "</p>\n		</div>\n	</div>\n</section>\n<footer class=\"landing__footer\">\n	<div class=\"services__partners\">\n		<ul>\n			<li><a href=\"http://www.paypal.com/\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/paypal.gif\" border=\"0\"></a></li>\n			<li><a href=\"http://www.directadmin.com/\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/directadmin-logo.gif\" border=\"0\"></a></li>\n			<li><a href=\"http://www.nic.ru/\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/ru-center4.gif\" border=\"0\"></a></li>\n			<li><a href=\"http://www.assist.ru/\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/assist-logo.gif\" border=\"0\"></a></li>\n			<li><a href=\"http://www.paymaster.ru/\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/paymaster-logo.png\" style=\"height: 25px;\" border=\"0\"></a></li>\n			<li><a href=\"http://www.microsoft.com/ru-ru/hosting/licensing/splabenefits.aspx\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/ms-spla.jpg\" border=\"0\"></a></li>\n			<li><a href=\"https://www.ripe.net/membership/indices/data/ru.bxtgroup.html\" title=\"LLC Baxet\" target=\"_blank\" rel=\"nofollow\"><img src=\"/img/partners/ncc-member-logo.png\" border=\"0\"></a></li>\n			<li><a target=\"_blank\" href=\"http://ipv6-test.com/validate.php?url=justhost.ru\" rel=\"nofollow\">\n					<img src=\"/img/partners/ipv6-small.png\" border=\"0\" alt=\"IPv6 Ready\"></a></li>\n		</ul>\n	</div>\n	<div class=\"cut-line\"></div>\n	<div class=\"footer\">\n		<div class=\"footer__links_blocks_handler\">\n			<ul>\n				<li><a href=\"http://www.facebook.com/Justhostru\" target=\"_blank\" class=\"facebook\" rel=\"nofollow\"><img src=\"/img/site/fb.png\"></a></li>\n	<!--            <li style=\"padding-left: 19px;\">\n					<a href=\"http://hostdb.ru\" title=\"Портал о хостинге и хостинг-провайдерах.\" target=\"_blank\"><img src=\"https://hostdb.ru/get_logo.php?id=59&type=1\" alt=\"Портал о хостинге и хостинг-провайдерах.\" width=\"88\" height=\"31\" border=\"0\"></a>\n				</li>-->\n			</ul>\n\n			<ul>\n				<li class=\"footer__links_header\">О Компании</li>\n				<li><a target=\"_self\" href=\"/kb/about\">Лицензии</a></li>\n				<li><a target=\"_self\" href=\"/support\">Контакты</a></li>\n				<li><a target=\"_self\" href=\"/kb/recv\">Реквизиты</a></li>\n				<li><a target=\"_self\" href=\"/kb/billing\">Способы оплаты</a></li>\n				<li><a target=\"_self\" href=\"/kb/jobs\">Вакансии</a></li>\n			</ul>\n\n			<ul>\n				<li class=\"footer__links_header\">Мы предлагаем</li>\n				<li><a target=\"_self\" href=\"/services/hosting\" rel=\"nofollow\">Хостинг и реселлинг</a></li>\n				<li><a target=\"_self\" href=\"/services/vps\" rel=\"nofollow\">Виртуальные серверы</a></li>\n				<li><a target=\"_self\" href=\"/services/dedic\" rel=\"nofollow\">Выделенные серверы</a></li>\n				<li><a target=\"_self\" href=\"/services/colo\" rel=\"nofollow\">Размещение оборудования</a></li>\n				<li><a target=\"_self\" href=\"/services/compare\" rel=\"nofollow\">Подобрать решение</a></li>\n				<li></li>\n			</ul>\n\n			<ul>\n				<li class=\"footer__links_header\">Поддержка</li>\n				<li><a target=\"_self\" href=\"/kb/docs\">Документы</a></li>\n				<li><a target=\"_self\" href=\"/kb/\">База знаний</a></li>\n				<li><a target=\"_self\" href=\"/support\">Обращение в службу поддержки</a></li>\n			</ul>\n		</div>\n\n		<div class=\"footer__version\">© 2006-2014 JustHost.ru</div>\n	</div>\n	\n</footer>";
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

this["jhst"]["Templates"]["ptemplates"]["popups/feedback"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"feedback__cont\">\n	<a href=\"\" class=\"feedback__close\"><i class=\"i i-x\"></i></a>\n	<div class=\"feedback__s\">\n		<h2 class=\"feedback__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Дарим месяц <br/>хостинга за каждый <br/>перенесенный <br/>к нам сайт!", "feedback", options) : helperMissing.call(depth0, "_", "Дарим месяц <br/>хостинга за каждый <br/>перенесенный <br/>к нам сайт!", "feedback", options)))
    + "</h2>\n		<p class=\"feedback__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "При переносе к нам 1 сайта вы получите <br/>1 месяц хостинга, а 12 либо более —<br/> целый год бесплатного хостинга!", "feedback", options) : helperMissing.call(depth0, "_", "При переносе к нам 1 сайта вы получите <br/>1 месяц хостинга, а 12 либо более —<br/> целый год бесплатного хостинга!", "feedback", options)))
    + "</p>\n		<p class=\"feedback__p2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Для участия в акции необходимо лишь зарегистрироваться и в течении 15 дней перенести к нам на хостинг ваши сайты. Переносом будет считаться указание наших NS в Namesever ваших доменов.", "feedback", options) : helperMissing.call(depth0, "_", "Для участия в акции необходимо лишь зарегистрироваться и в течении 15 дней перенести к нам на хостинг ваши сайты. Переносом будет считаться указание наших NS в Namesever ваших доменов.", "feedback", options)))
    + "</p>\n		<p class=\"feedback__p2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Домены должны находиться на наших NS все время действия бесплатного периода.", "feedback", options) : helperMissing.call(depth0, "_", "Домены должны находиться на наших NS все время действия бесплатного периода.", "feedback", options)))
    + "</p>\n		<form action=\"/auth/new\" class=\"feedback__form\" method=\"post\">\n			<input type=\"text\" class=\"feedback__email\" maxlength=\"100\" name=\"email\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Введите емайл", "feedback", options) : helperMissing.call(depth0, "_", "Введите емайл", "feedback", options)))
    + "\">\n			<button class=\"feedback__submit\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Подключиться к Justhost.ru", "feedback", options) : helperMissing.call(depth0, "_", "Подключиться к Justhost.ru", "feedback", options)))
    + "</button>\n		</form>\n		<p class=\"feedback__p3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Тестовый период 15 дней", "feedback", options) : helperMissing.call(depth0, "_", "Тестовый период 15 дней", "feedback", options)))
    + "</p>\n	</div>\n</div>";
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

this["jhst"]["Templates"]["ptemplates"]["popups/registration"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"feedback__cont registration\">\n	<a href=\"\" class=\"feedback__close\"><i class=\"i i-x\"></i></a>\n	<div class=\"feedback__s\">\n		<h2 class=\"feedback__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Начать работу с Justhost", "feedback", options) : helperMissing.call(depth0, "_", "Начать работу с Justhost", "feedback", options)))
    + "</h2>\n		<form action=\"/auth/new\" class=\"feedback__form\" method=\"post\">\n			<input type=\"text\" class=\"feedback__email\" maxlength=\"100\" name=\"email\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Введите емайл", "feedback", options) : helperMissing.call(depth0, "_", "Введите емайл", "feedback", options)))
    + "\">\n			<button class=\"feedback__submit\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Продолжить", "feedback", options) : helperMissing.call(depth0, "_", "Продолжить", "feedback", options)))
    + "</button>\n		</form>\n		<p class=\"feedback__p3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Тестовый период 15 дней", "feedback", options) : helperMissing.call(depth0, "_", "Тестовый период 15 дней", "feedback", options)))
    + "</p>\n	</div>\n</div>";
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