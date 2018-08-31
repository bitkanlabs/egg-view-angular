'use strict';

module.exports = app => {
  app.view.use('angular', require('./lib/view'));
  require('./lib/ng-locale')(app, app.config.angular);

  // 自动加载 Middleware
  app.config.coreMiddleware.push('ng-locale');
};
