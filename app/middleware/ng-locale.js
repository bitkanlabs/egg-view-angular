'use strict';

module.exports = () => {
  return async function locale(ctx, next) {
    if (ctx.__ngLocale) {
      ctx.__locale = ctx.__ngLocale();
    }
    await next();
  };
};
