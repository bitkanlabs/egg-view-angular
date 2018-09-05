'use strict';

const LOCALES = Symbol('Application#locales');

module.exports = {

  get locales() {
    if (!this[LOCALES]) {
      this[LOCALES] = {};
    }
    return this[LOCALES];
  },

};
