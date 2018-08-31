'use strict';
const fs = require('fs');
const path = require('path');

module.exports = (app, options = {}) => {
  if (options.i18n !== true) {
    return;
  }

  const browser = options.browser
    || options.dist && path.join(options.dist, 'browser')
    || path.join(process.cwd(), 'browser');

  const locales = Object.assign.apply(null, fs.readdirSync(browser)
    .filter(file => fs.statSync(path.join(browser, file)).isDirectory())
    .map(locale => ({ [locale]: true })));

  app.context.__ngLocale = function() {
    const match = /^\/([a-z]{2}(?:-[A-Z]{2})?)\/.*/gi.exec(this.url);
    return match && match[1] && locales[match[1]] ? match[1] : null;
  };
};
