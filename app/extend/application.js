'use strict';

const Engine = require('../../lib/engine');
const ANGULAR_ENGINE = Symbol('Application#angular');

module.exports = {

  get angular() {
    if (!this[ANGULAR_ENGINE]) {
      this[ANGULAR_ENGINE] = new Engine(this);
    }
    return this[ANGULAR_ENGINE];
  },
};
