'use strict';
const { CommonEngine } = require('@nguniversal/common/engine');
const { REQUEST, RESPONSE } = require('@nguniversal/common/tokens');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.options = app.config.angular || {};
    this.engine = new CommonEngine(this.options.bootstrap, this.options.providers);
  }

  render(name, locals, options = {}) {
    const opts = Object.assign(options, { documentFilePath: name, url: locals.ctx.url, providers: getReqResProviders(locals.ctx) });
    return this.engine.render(opts);
  }

}

function getReqResProviders(ctx) {
  return [
    {
      provide: REQUEST,
      useValue: ctx.request,
    },
    {
      provide: RESPONSE,
      useValue: ctx.response,
    },
  ];
}

module.exports = Engine;
