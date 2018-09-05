'use strict';

module.exports = () => {
  return async function localeBaseHref(ctx, next) {
    if (ctx.locales.keys().length) {
      const match = /^\/([a-z]{2}(?:-[A-Z]{2})?)(\/.*)/gi.exec(this.url);
      if (match && ctx.locales[match[1]]) {
        Object.assign(ctx, match && { __locale: match[1], url: match[2] } || {});
      }
    }
    await next();
  };
};
