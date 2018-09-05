'use strict';

module.exports = app => {
  // Config
  require('./lib/angular')(app);

  // 自动加载 View
  app.view.use('angular', require('./lib/view'));

  // 自动加载 Middleware
  app.config.coreMiddleware.push('localeBaseHref');
};
