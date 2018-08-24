'use strict';
const { CommonEngine } = require('nguniversal-common-engine');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.options = app.config.angular || {};
    this.engine = new CommonEngine(this.options.bootstrap, this.options.providers);
  }

  render(name, locals, options = {}) {
    const opts = Object.assign(options, { documentFilePath: name, url: locals.url });
    return this.engine.render(opts);
  }

}

module.exports = Engine;
