"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _mdx = _interopRequireDefault(require("@mdx-js/mdx"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _prettier = _interopRequireDefault(require("prettier"));

var _core = require("@babel/core");

var _utils = require("./utils.js");

var _vm = _interopRequireDefault(require("vm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderToStaticMarkup = _server.default.renderToStaticMarkup;
var defaultConfig = {
  src: './posts',
  dist: './dist',
  cache: './dist/cache',
  styles: '',
  scripts: '',
  filterDrafts: _utils.filterDrafts,
  fileContextPath: '../src/file-context.js',
  additionalImports: '',
  additionalComponents: ''
};

function wrapWithBootstrap(_ref) {
  var html = _ref.html,
      filePath = _ref.filePath,
      styles = _ref.styles,
      scripts = _ref.scripts;
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.makeTitle)(filePath);
  return "<html lang=\"en\">\n<head>\n<style>".concat(styles, "</style>\n<title>").concat(title, "</title>\n</head>\n<body><main class=\"u-readable\">").concat(html, "</main>").concat(scripts, "</body>\n</html>");
}

function build() {
  var initialConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  var config = _objectSpread({}, defaultConfig, initialConfig);

  var files = (0, _utils.searchRecursive)(config.src, 'mdx');
  var jsSource = files // map down to an array of arrays
  // [ 'path/to/file.mdx', src]
  .map(function (file) {
    return [file.replace(config.src.replace('./', ''), ''), _mdx.default.sync(_fs.default.readFileSync(file)).replace(/export default/g, '')];
  }) // filter out drafts
  .filter(config.filterDrafts) // wrap in additional JS, and export defult the rendered markup
  .map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        file = _ref3[0],
        source = _ref3[1],
        _ref3$ = _ref3[2],
        filePath = _ref3$ === void 0 ? file.split('/') : _ref3$;

    return [filePath, "import React from 'react';\n    import {fileContext} from '".concat(config.fileContextPath, "';\n    import reactDOMServer from 'react-dom/server';\n    import {MDXTag} from '@mdx-js/tag';\n    ").concat(config.additionalImports, "\n    const {renderToStaticMarkup} = reactDOMServer;\n    ").concat(source, "\n    export default renderToStaticMarkup(<fileContext.Provider value={{ files: [").concat(files.map(_utils.toArray).filter(config.filterDrafts).map(function (f) {
      return "'".concat(f, "'");
    }).join(','), "] }}><MDXContent components={{ ").concat(config.additionalComponents, " }} /></fileContext.Provider>)")];
  }) // format the file with prettier, this probably isn't needed
  .map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        filePath = _ref5[0],
        source = _ref5[1];

    return [filePath, _prettier.default.format(source, {
      semi: false,
      parser: 'babel'
    })];
  }) // transform with babel
  .map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        filePath = _ref7[0],
        source = _ref7[1];

    var _transformSync = (0, _core.transformSync)(source, {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
        code = _transformSync.code;

    return [filePath, code];
  }) // eval the code, write to cache
  .map(function parseSource(_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        filePath = _ref9[0],
        source = _ref9[1];

    var exports = {};
    var module = {
      exports: exports
    };

    try {
      _vm.default.runInNewContext(source, {
        exports: exports,
        module: module,
        require: require
      });
    } catch (e) {
      console.log(e);
      throw new Error('Error!!!');
    }

    var _filePath$reverse = filePath.reverse(),
        _filePath$reverse2 = _toArray(_filePath$reverse),
        last = _filePath$reverse2[0],
        fullpath = _filePath$reverse2.slice(1);

    fullpath = fullpath.reverse();

    var _fullpath = fullpath,
        _fullpath2 = _slicedToArray(_fullpath, 1),
        first = _fullpath2[0];

    if (fullpath.length === 0) {
      first = last;
    }

    var pathToDir = "".concat(cache, "/").concat(fullpath.join('/'));

    _fs.default.writeFileSync("".concat(cache, "/").concat(fullpath.join('/'), "/").concat(last, ".js"), source);

    return [filePath, exports.default];
  }) // generate the html, write to dist
  .map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        filePath = _ref11[0],
        html = _ref11[1];

    var _filePath$reverse3 = filePath.reverse(),
        _filePath$reverse4 = _toArray(_filePath$reverse3),
        last = _filePath$reverse4[0],
        fullpath = _filePath$reverse4.slice(1);

    fullpath = fullpath.reverse();

    var _fullpath3 = fullpath,
        _fullpath4 = _slicedToArray(_fullpath3, 1),
        first = _fullpath4[0];

    if (fullpath.length === 0) {
      first = last;
    }

    var pathToFile = "".concat(dist, "/").concat(filePath.join('/').replace('.mdx', ''), ".html");
    var bootstrapHTML = wrapWithBootstrap({
      html: html,
      filePath: first.replace('.mdx', ''),
      styles: config.styles,
      scripts: config.scripts
    }).replace(/\r/g, '');

    _fs.default.writeFileSync(pathToFile, bootstrapHTML);
  });
}