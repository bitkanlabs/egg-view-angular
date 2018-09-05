'use strict';

module.exports = () => {
  return async function angular(ctx, next) {
    ctx.body = await ctx.angular.render(ctx);
    await next();
  };
};
