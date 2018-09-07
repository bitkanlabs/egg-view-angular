'use strict';

module.exports = () => {
  return async function angular(ctx, next) {
    if (ctx.accept.type().indexOf('text/html') === 0) {
      ctx.body = await ctx.app.angular.render(ctx);
    }
    await next();
  };
};
