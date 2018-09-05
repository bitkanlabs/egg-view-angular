'use strict';

const LOCALES = Symbol('Context#locales');

module.exports = {

  get locales() {
    if (!this[LOCALES]) {
      this[LOCALES] = {};
    }
    return this[LOCALES];
  },

};
