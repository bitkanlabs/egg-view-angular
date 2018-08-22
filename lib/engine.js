'use strict';
const { CommonEngine } = require('@ngks/engine');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config.angular;
    this.engine = new CommonEngine(this.config);
  }

  render(name, locals) {
    return this.engine.render(Object.assign({}, locals, this.config, { documentFilePath: name }));
  }

}

module.exports = Engine;
