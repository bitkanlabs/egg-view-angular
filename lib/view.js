'use strict';
const { renderModuleFactory } =  require('@angular/platform-server');

class View {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.factory = ctx.factory;
  }

  render(name, locals, options) {
    return renderModuleFactory(this.factory);
  }

  renderString() {
    return Promise.reject('not implemented yet!');
  }
}

module.exports = View;
