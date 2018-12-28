import path from 'path'
import fs from 'fs'

export function mkDirByPathSync(targetDir) {
  const sep = path.sep
  const initDir = path.isAbsolute(targetDir) ? sep : ''
  const baseDir = '.'

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir)
    try {
      fs.mkdirSync(curDir)
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`)
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err // Throw if it's just the last created dir.
      }
    }

    return curDir
  }, initDir)
}

export function makeTitle(filePath) {
  let title = filePath
    .split('-')
    .map(hunk => hunk[0].toUpperCase() + hunk.slice(1))
    .join(' ')
  return title
}

export function searchRecursive(base, ext, files = fs.readdirSync(base), result = []) {
  files.forEach(file => {
    const newbase = path.join(base, file)
    if (fs.statSync(newbase).isDirectory()) {
      result = searchRecursive(newbase, ext, fs.readdirSync(newbase), result)
    } else {
      if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
        result.push(newbase)
      }
    }
  })
  return result
}

export function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg
  }
  return [arg]
}

export function filterDrafts([file]) {
  return !file.endsWith('.draft.mdx')
}
