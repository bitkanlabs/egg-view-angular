'use strict';

const Engine = require('../../lib/engine');
const ANGULAR = Symbol('Application#angular');

module.exports = {

  get angular() {
    if (!this[ANGULAR]) {
      this[ANGULAR] = new Engine(this);
    }
    return this[ANGULAR];
  },

};
