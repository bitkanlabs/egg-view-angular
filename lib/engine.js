'use strict';
const { CommonEngine } = require('@ngks/engine');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.options = app.config.angular || {};
    this.engine = new CommonEngine(this.options.bootstrap, this.options.providers);
  }

  render(name, locals, options) {
    return this.engine.render(Object.assign({}, locals, options, this.options, { documentFilePath: name, url: locals.req.originalUrl }));
  }

}

module.exports = Engine;
