import mdx from '@mdx-js/mdx'
import reactDOMServer from 'react-dom/server'
import path from 'path'
import fs from 'fs'
import prettier from 'prettier'
import { transformSync } from '@babel/core'
import { mkDirByPathSync, makeTitle, searchRecursive, toArray, filterDrafts } from './utils.js'
import vm from 'vm'

const { renderToStaticMarkup } = reactDOMServer

const defaultConfig = {
  src: './posts',
  dist: './dist',
  cache: './dist/cache',
  styles: '',
  scripts: '',
  filterDrafts,
  fileContextPath: './src/file-context.js',
  additionalImports: '',
  additionalComponents: '',
}

function wrapWithBootstrap({ html, filePath, styles, scripts }, title = makeTitle(filePath)) {
  return `<html lang="en">
<head>
<style>${styles}</style>
<title>${title}</title>
</head>
<body><main class="u-readable">${html}</main>${scripts}</body>
</html>`
}

export default function build(initialConfig = defaultConfig) {
  let config = {
    ...defaultConfig,
    ...initialConfig,
  }
  let files = searchRecursive(config.src, 'mdx')

  const jsSource = files
    // map down to an array of arrays
    // [ 'path/to/file.mdx', src]
    .map(file => {
      return [
        file.replace(config.src.replace('./', ''), ''),
        mdx.sync(fs.readFileSync(file)).replace(/export default/g, ''),
      ]
    })
    // filter out drafts
    .filter(config.filterDrafts)
    // wrap in additional JS, and export defult the rendered markup
    .map(([file, source, filePath = file.split('/')]) => {
      return [
        filePath,
        `import React from 'react';
    import {fileContext} from '${config.fileContextPath}';
    import reactDOMServer from 'react-dom/server';
    import {MDXTag} from '@mdx-js/tag';
    ${config.additionalImports}
    const {renderToStaticMarkup} = reactDOMServer;
    ${source}
    export default renderToStaticMarkup(<fileContext.Provider value={{ files: [${files
      .map(toArray)
      .filter(config.filterDrafts)
      .map(f => `'${f}'`)
      .join(',')}] }}><MDXContent components={{ ${
          config.additionalComponents
        } }} /></fileContext.Provider>)`,
      ]
    })
    // format the file with prettier, this probably isn't needed
    .map(([filePath, source]) => [
      filePath,
      prettier.format(source, { semi: false, parser: 'babel' }),
    ])
    // transform with babel
    .map(([filePath, source]) => {
      let { code } = transformSync(source, {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      })
      return [filePath, code]
    })
    // eval the code, write to cache
    .map(function parseSource([filePath, source]) {
      let exports = {}
      let module = { exports }
      try {
        vm.runInNewContext(source, { exports, module, require })
      } catch (e) {
        console.log(e)
        throw new Error('Error!!!')
      }
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
      let bootstrapHTML = wrapWithBootstrap({
        html,
        filePath: first.replace('.mdx', ''),
        styles: config.styles,
        scripts: config.scripts,
      }).replace(/\r/g, '')
      fs.writeFileSync(pathToFile, bootstrapHTML)
    })
}
