function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import path from 'path';
import fs from 'fs';
export function mkDirByPathSync(targetDir) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = '.';
  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);

    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir;
      } // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.


      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;

      if (!caughtErr || caughtErr && curDir === path.resolve(targetDir)) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
}
export function searchRecursive(base, ext) {
  let files = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fs.readdirSync(base);
  let result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  files.forEach(file => {
    const newbase = path.join(base, file);

    if (fs.statSync(newbase).isDirectory()) {
      result = searchRecursive(newbase, ext, fs.readdirSync(newbase), result);
    } else {
      if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
        result.push(newbase);
      }
    }
  });
  return result;
}
export function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return [arg];
}
export function filterDrafts(_ref) {
  let _ref2 = _slicedToArray(_ref, 1),
      file = _ref2[0];

  return !file.endsWith('.draft.mdx');
}
export function makeTitle(filePath) {
  let title = filePath.split('-').map(hunk => hunk[0].toUpperCase() + hunk.slice(1)).join(' ');
  return title;
}