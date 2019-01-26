"use strict";

var _styles = require("./styles.js");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// build posts
(0, _index.default)({
  src: './posts',
  dist: './dist/posts',
  cache: './dist/cache/posts',
  styles: _styles.styles,
  fileContextPath: '../src/components/file-context.js',
  additionalImports: "import Header from '../src/components/header.js'",
  additionalComponents: 'Header'
}); // build static pages

(0, _index.default)({
  src: './src',
  dist: './dist',
  cache: './dist/cache',
  styles: _styles.styles,
  fileContextPath: '../src/components/file-context.js',
  additionalImports: "import Header from '../src/components/header.js'",
  additionalComponents: 'Header'
});
process.on('unhandledRejection', function (reason, p) {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason); // application specific logging, throwing an error, or other logic here
});