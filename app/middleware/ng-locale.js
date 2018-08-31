'use strict';

module.exports = () => {
  return async function locale(ctx, next) {
    if (ctx.__ngLocale) {
      const locale = ctx.__ngLocale();

      if (locale && ctx.url.startsWith(`/${locale}/`)) {
        ctx.url = ctx.url.substring(locale.length + 1);
      }

      ctx.__locale = locale;
    }
    await next();
  };
};
