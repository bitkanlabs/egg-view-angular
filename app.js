'use strict';

module.exports = app => {
  app.view.use('angular', require('./lib/view'));
};
