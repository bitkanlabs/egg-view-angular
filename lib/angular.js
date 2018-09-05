'use strict';
const fs = require('fs');
const path = require('path');

module.exports = app => {
  const options = Object.assign({}, { i18n: false, dist: process.cwd() }, app.options.angular);

  if (options.i18n !== true) {
    return;
  }

  Object.assign(options, {
    browser: options.browser || path.join(options.dist, 'browser'),
    server: options.server || path.join(options.dist, 'server'),
  });

  const locales = Object.assign.apply(null, fs.readdirSync(options.server)
    .filter(name => fs.statSync(path.join(options.server, name)).isDirectory())
    .filter(name => fs.statSync(path.join(options.server, name, 'main.js')).isFile())
    .filter(name => fs.statSync(path.join(options.browser, name)).isDirectory())
    .filter(name => fs.statSync(path.join(options.browser, name, 'index.html')).isFile())
    .map(locale => ({ [locale]: true })));

  Object.assign(app.context.locales, locales || {});
  Object.assign(app.options.angular, options || {});
};
