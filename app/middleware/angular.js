'use strict';

module.exports = () => {
  return async function angular(ctx, next) {
    return ctx.angular.render(ctx);
  };
};
