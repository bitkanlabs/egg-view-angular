'use strict';

class View {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  render(filename, locals, options) {
    return this.app.angular.renderFile(filename, locals, options);
  }

  renderString(tpl, locals, options) {
    return this.app.angular.renderString(tpl, locals, options);
  }
}

module.exports = View;
