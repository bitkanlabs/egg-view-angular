'use strict';

const Engine = require('../../lib/engine');
const ANGULAR = Symbol('Application#angular');
const LOCALES = Symbol('Application#locales');

module.exports = {

  get angular() {
    if (!this[ANGULAR]) {
      this[ANGULAR] = new Engine(this);
    }
    return this[ANGULAR];
  },

  get locales() {
    if (!this[LOCALES]) {
      this[LOCALES] = {};
    }
    return this[LOCALES];
  },

};
