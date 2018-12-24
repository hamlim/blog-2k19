"use strict";

var _core = _interopRequireDefault(require("@native-bundler/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _core.default)({
  entry: './site/src/index.js',
  out: './site/dist/index.js',
  config: {
    cacheExternals: true
  }
});