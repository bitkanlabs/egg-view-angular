'use strict';
const { ɵCommonEngine } = require('@nguniversal/common/engine');
const { ɵREQUEST, ɵRESPONSE } = require('@nguniversal/common/tokens');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.options = app.config.angular || {};
    this.engine = new ɵCommonEngine(this.options.bootstrap, this.options.providers);
  }

  render(name, locals, options = {}) {
    const opts = Object.assign(options, { documentFilePath: name, url: locals.ctx.url, providers: getReqResProviders(locals.ctx) });
    return this.engine.render(opts);
  }

}

function getReqResProviders(ctx) {
  return [
    {
      provide: ɵREQUEST,
      useValue: ctx.request,
    },
    {
      provide: ɵRESPONSE,
      useValue: ctx.response,
    },
  ];
}

module.exports = Engine;
