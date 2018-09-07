'use strict';

module.exports = () => {
  return async function localeBaseHref(ctx, next) {
    if (ctx.accept.type().indexOf('text/html') === 0 && Object.keys(ctx.locales || {}).length) {
      const match = /^\/([a-z]{2}(?:-[A-Z]{2})?)(\/.*)/gi.exec(ctx.url);
      if (match && ctx.locales[match[1]]) {
        ctx.url = match[2];
        ctx.query = Object.assign(ctx.query, { locale: match[1] });
      }
    }
    await next();
  };
};
