'use strict';

module.exports = () => {
  return async function angular(ctx, next) {
    ctx.body = await ctx.app.angular.render(ctx);
    await next();
  };
};
