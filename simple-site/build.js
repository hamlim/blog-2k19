import mdx from '@mdx-js/mdx'
import { renderToStaticMarkup } from 'react-dom/server'
import path from 'path'
import fs from 'fs'
import prettier from 'prettier'
import { transformSync } from '@babel/core'
import { mkDirByPathSync, makeTitle, searchRecursive } from './utils.js'
import { styles } from './styles.js'

const posts = './posts'
const dist = './dist'
const cache = './dist/cache'

function wrapWithBootstrap(html, filePath, title = makeTitle(filePath)) {
  return `<html lang="en">
<head>
<style>${styles}</style>
<title>${title}</title>
</head>
<body><main class="u-readable">${html}</main></body>
</html>`
}

let files = searchRecursive(posts, 'mdx')

const jsSource = files
  // map down to an array of arrays
  // [ 'path/to/file.mdx', src]
  .map(file => {
    return [
      file.replace('posts/', ''),
      mdx.sync(fs.readFileSync(file)).replace(/export default/g, ''),
    ]
  })
  // filter out drafts
  .filter(([file]) => !file.endsWith('.draft.mdx'))
  // wrap in additional JS, and export defult the rendered markup
  .map(([file, source, filePath = file.split('/')]) => {
    return [
      filePath,
      `import React from 'react';
import {fileContext} from './src/file-context.js';
import {renderToStaticMarkup} from 'react-dom/server';
import {MDXTag} from '@mdx-js/tag';
${source}
export default renderToStaticMarkup(<fileContext.Provider value={{ files: [${files
        .map(f => `'${f}'`)
        .join(',')}] }}><MDXContent /></fileContext.Provider>)`,
    ]
  })
  // format the file with prettier, this probably isn't needed
  .map(([filePath, source]) => [
    filePath,
    prettier.format(source, { semi: false, parser: 'babylon' }),
  ])
  // transform with babel
  .map(([filePath, source]) => {
    let { code } = transformSync(source, {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    })
    return [filePath, code]
  })
  // eval the code, write to cache
  .map(([filePath, source]) => {
    let exports = {}
    let module = { exports }
    eval(source)
    let [last, ...fullpath] = filePath.reverse()
    fullpath = fullpath.reverse()
    let [first] = fullpath
    if (fullpath.length === 0) {
      first = last
    }
    let pathToDir = `${cache}/${fullpath.join('/')}`
    fs.writeFileSync(`${cache}/${fullpath.join('/')}/${last}.js`, source)
    return [filePath, exports.default]
  })
  // generate the html, write to dist
  .map(([filePath, html]) => {
    let [last, ...fullpath] = filePath.reverse()
    fullpath = fullpath.reverse()
    let [first] = fullpath
    if (fullpath.length === 0) {
      first = last
    }
    let pathToFile = `${dist}/${filePath.join('/').replace('.mdx', '')}.html`
    let bootstrapHTML = wrapWithBootstrap(html, first.replace('.mdx', '')).replace(/\r/g, '')
    fs.writeFileSync(pathToFile, bootstrapHTML)
  })
