'use strict';
const fs = require('fs');
const path = require('path');

module.exports = (app, options = {}) => {
  if (options.i18n !== true) {
    return;
  }

  const locales = fs.readdirSync(options.browser || options.dist && path.join(options.dist, 'browser'), path.join(process.cwd(), 'browser'));

  app.context.__ngLocale = function() {
    const match = /^\/([a-z]{2}(?:-[A-Z]{2})?)\/.*/gi.exec(this.url);
    return match && match[1] && locales[match[1]] ? match[1] : null;
  };
};
