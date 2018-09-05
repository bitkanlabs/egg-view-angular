'use strict';
const path = require('path');
const { ɵCommonEngine } = require('@nguniversal/common/engine');
const { ɵREQUEST, ɵRESPONSE } = require('@nguniversal/common/tokens');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

class Engine {
  constructor(app) {
    this.options = Object.assign({}, { index: 'index.html' }, app.config.angular);

    this.engines = Object.keys(app.context.locales).map(locale => {
      const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(path.join(this.options.server, locale, 'main'));
      return new ɵCommonEngine(AppServerModuleNgFactory, [ provideModuleMap(LAZY_MODULE_MAP) ].concat(this.options.providers || []));
    });
  }

  render(ctx, options = {}) {
    const engine = this.engines[ctx.locale];
    if (!engine) {
      return false;
    }
    options = Object.assign({}, {
      documentFilePath: path.join(this.options.browser, ctx.locale, this.options.index),
      url: ctx.url,
      providers: getReqResProviders(ctx),
    });
    return engine.render(options);
  }

  renderFile(filename, locals, options = {}) {
    const engine = this.engines[locals.ctx.locale];
    options = Object.assign(options, {
      documentFilePath: filename,
      url: locals.ctx.url,
      providers: getReqResProviders(locals.ctx),
    });
    return engine.render(options);
  }

  renderString(tpl, locals, options = {}) {
    const engine = this.engines[locals.ctx.locale];
    options = Object.assign(options, {
      document: tpl,
      url: locals.ctx.url,
      providers: getReqResProviders(locals.ctx),
    });
    return engine.render(options);
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
