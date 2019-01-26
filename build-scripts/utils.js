"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkDirByPathSync = mkDirByPathSync;
exports.searchRecursive = searchRecursive;
exports.toArray = toArray;
exports.filterDrafts = filterDrafts;
exports.makeTitle = makeTitle;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function mkDirByPathSync(targetDir) {
  var sep = _path.default.sep;
  var initDir = _path.default.isAbsolute(targetDir) ? sep : '';
  var baseDir = '.';
  return targetDir.split(sep).reduce(function (parentDir, childDir) {
    var curDir = _path.default.resolve(baseDir, parentDir, childDir);

    try {
      _fs.default.mkdirSync(curDir);
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir;
      } // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.


      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error("EACCES: permission denied, mkdir '".concat(parentDir, "'"));
      }

      var caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;

      if (!caughtErr || caughtErr && curDir === _path.default.resolve(targetDir)) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
}

function searchRecursive(base, ext) {
  var files = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _fs.default.readdirSync(base);
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  files.forEach(function (file) {
    var newbase = _path.default.join(base, file);

    if (_fs.default.statSync(newbase).isDirectory()) {
      result = searchRecursive(newbase, ext, _fs.default.readdirSync(newbase), result);
    } else {
      if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
        result.push(newbase);
      }
    }
  });
  return result;
}

function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return [arg];
}

function filterDrafts(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      file = _ref2[0];

  return !file.endsWith('.draft.mdx');
}

function makeTitle(filePath) {
  var title = filePath.split('-').map(function (hunk) {
    return hunk[0].toUpperCase() + hunk.slice(1);
  }).join(' ');
  return title;
}