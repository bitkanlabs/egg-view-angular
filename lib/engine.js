'use strict';
const { ɵCommonEngine } = require('@nguniversal/common/engine');
const { ɵREQUEST, ɵRESPONSE } = require('@nguniversal/common/tokens');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

class Engine {
  constructor(app) {
    this.app = app;
    this.options = Object.assign({}, app.config.angular || {});

    const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(this.options.main);
    this.engine = new ɵCommonEngine(AppServerModuleNgFactory, [ provideModuleMap(LAZY_MODULE_MAP) ].concat(this.options || []));
  }

  render(filename, locals, options = {}) {
    const opts = Object.assign(options, { documentFilePath: filename, url: locals.ctx.url, providers: getReqResProviders(locals.ctx) });
    return this.engine.render(opts);
  }

  renderString(tpl, locals, options = {}) {
    const opts = Object.assign(options, { document: tpl, url: locals.ctx.url, providers: getReqResProviders(locals.ctx) });
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
