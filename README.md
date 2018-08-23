# egg-view-angular

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-angular.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-angular
[travis-image]: https://img.shields.io/travis/eggjs/egg-view-angular.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-view-angular
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-view-angular.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-view-angular?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-view-angular.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-view-angular
[snyk-image]: https://snyk.io/test/npm/egg-view-angular/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-angular
[download-image]: https://img.shields.io/npm/dm/egg-view-angular.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-angular

egg view plugin for angular

## Install

```bash
$ npm i egg-view-angular --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.angular = {
  enable: true,
  package: 'egg-view-angular',
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Example

angular server side render example, please see [egg-angular-webpack-boilerplate](https://github.com/hubcarl/egg-angular-webpack-boilerplate)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
