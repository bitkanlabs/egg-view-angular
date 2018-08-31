'use strict';

module.exports = app => {
  app.view.use('angular', require('./lib/view'));
  require('./lib/ngi18n')(app, app.config.angular);

  // 自动加载 Middleware
  app.config.coreMiddleware.push('ngi18n');
};
