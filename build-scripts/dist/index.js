function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import mdx from '@mdx-js/mdx';
import reactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import prettier from 'prettier';
import { transformSync } from '@babel/core';
import { mkDirByPathSync, makeTitle, searchRecursive, toArray, filterDrafts } from './utils.js';
import vm from 'vm';
const renderToStaticMarkup = reactDOMServer.renderToStaticMarkup;
const defaultConfig = {
  src: './posts',
  dist: './dist',
  cache: './dist/cache',
  styles: '',
  scripts: '',
  filterDrafts,
  fileContextPath: './src/file-context.js',
  additionalImports: '',
  additionalComponents: ''
};

function wrapWithBootstrap(_ref) {
  let html = _ref.html,
      filePath = _ref.filePath,
      styles = _ref.styles,
      scripts = _ref.scripts;
  let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : makeTitle(filePath);
  return `<html lang="en">
<head>
<style>${styles}</style>
<title>${title}</title>
</head>
<body><main class="u-readable">${html}</main>${scripts}</body>
</html>`;
}

export default function build() {
  let initialConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  let config = _objectSpread({}, defaultConfig, initialConfig);

  let files = searchRecursive(config.src, 'mdx');
  const jsSource = files // map down to an array of arrays
  // [ 'path/to/file.mdx', src]
  .map(file => {
    return [file.replace(config.src.replace('./', ''), ''), mdx.sync(fs.readFileSync(file)).replace(/export default/g, '')];
  }) // filter out drafts
  .filter(config.filterDrafts) // wrap in additional JS, and export defult the rendered markup
  .map((_ref2) => {
    let _ref3 = _slicedToArray(_ref2, 3),
        file = _ref3[0],
        source = _ref3[1],
        _ref3$ = _ref3[2],
        filePath = _ref3$ === void 0 ? file.split('/') : _ref3$;

    return [filePath, `import React from 'react';
    import {fileContext} from '${config.fileContextPath}';
    import reactDOMServer from 'react-dom/server';
    import {MDXTag} from '@mdx-js/tag';
    ${config.additionalImports}
    const {renderToStaticMarkup} = reactDOMServer;
    ${source}
    export default renderToStaticMarkup(<fileContext.Provider value={{ files: [${files.map(toArray).filter(config.filterDrafts).map(f => `'${f}'`).join(',')}] }}><MDXContent components={{ ${config.additionalComponents} }} /></fileContext.Provider>)`];
  }) // format the file with prettier, this probably isn't needed
  .map((_ref4) => {
    let _ref5 = _slicedToArray(_ref4, 2),
        filePath = _ref5[0],
        source = _ref5[1];

    return [filePath, prettier.format(source, {
      semi: false,
      parser: 'babel'
    })];
  }) // transform with babel
  .map((_ref6) => {
    let _ref7 = _slicedToArray(_ref6, 2),
        filePath = _ref7[0],
        source = _ref7[1];

    let _transformSync = transformSync(source, {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
        code = _transformSync.code;

    return [filePath, code];
  }) // eval the code, write to cache
  .map(function parseSource(_ref8) {
    let _ref9 = _slicedToArray(_ref8, 2),
        filePath = _ref9[0],
        source = _ref9[1];

    let exports = {};
    let module = {
      exports
    };

    try {
      vm.runInNewContext(source, {
        exports,
        module,
        require
      });
    } catch (e) {
      console.log(e);
      throw new Error('Error!!!');
    }

    let _filePath$reverse = filePath.reverse(),
        _filePath$reverse2 = _toArray(_filePath$reverse),
        last = _filePath$reverse2[0],
        fullpath = _filePath$reverse2.slice(1);

    fullpath = fullpath.reverse();

    let _fullpath = fullpath,
        _fullpath2 = _slicedToArray(_fullpath, 1),
        first = _fullpath2[0];

    if (fullpath.length === 0) {
      first = last;
    }

    let pathToDir = `${cache}/${fullpath.join('/')}`;
    fs.writeFileSync(`${cache}/${fullpath.join('/')}/${last}.js`, source);
    return [filePath, exports.default];
  }) // generate the html, write to dist
  .map((_ref10) => {
    let _ref11 = _slicedToArray(_ref10, 2),
        filePath = _ref11[0],
        html = _ref11[1];

    let _filePath$reverse3 = filePath.reverse(),
        _filePath$reverse4 = _toArray(_filePath$reverse3),
        last = _filePath$reverse4[0],
        fullpath = _filePath$reverse4.slice(1);

    fullpath = fullpath.reverse();

    let _fullpath3 = fullpath,
        _fullpath4 = _slicedToArray(_fullpath3, 1),
        first = _fullpath4[0];

    if (fullpath.length === 0) {
      first = last;
    }

    let pathToFile = `${dist}/${filePath.join('/').replace('.mdx', '')}.html`;
    let bootstrapHTML = wrapWithBootstrap({
      html,
      filePath: first.replace('.mdx', ''),
      styles: config.styles,
      scripts: config.scripts
    }).replace(/\r/g, '');
    fs.writeFileSync(pathToFile, bootstrapHTML);
  });
}