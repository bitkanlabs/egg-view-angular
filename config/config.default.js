'use strict';

module.exports = () => {
  const config = {};

  config.view = {
    mapping: {
      '.html': 'angular',
      '.js': 'angular',
    },
  };

  config.ngi18n = {};

  return config;
};

