import mdx from '@mdx-js/mdx'
import { renderToStaticMarkup } from 'react-dom/server'
import path from 'path'
import fs from 'fs'
import prettier from 'prettier'
import { transformSync } from '@babel/core'

const posts = './posts'
const dist = './dist'
const cache = './dist/cache'

function searchRecursive(base, ext, files = fs.readdirSync(base), result = []) {
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

function makeTitle(filePath) {
  let title = filePath.split('.')[0]
  title = title.replace('/', '')
  title = title[0].toUpperCase() + title.slice(1)
  return title
}

function wrapWithBootstrap(html, filePath, title = makeTitle(filePath)) {
  return `<html lang="en">
<head>
<title>${title}</title>
</head>
<body>${html}</body>
</html>`
}

const files = searchRecursive(posts, 'mdx')

const jsSource = files
  .map(file => {
    return [file, mdx.sync(fs.readFileSync(file)).replace(/export default/g, '')]
  })
  .map(([file, source, filePath = file.replace(/posts/g, '')]) => {
    return [
      filePath,
      `import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MDXTag} from '@mdx-js/tag';
${source}
export default renderToStaticMarkup(<MDXContent />)`,
    ]
  })
  .map(([filePath, source]) => [
    filePath,
    prettier.format(source, { semi: false, parser: 'babylon' }),
  ])
  .map(([filePath, source]) => {
    const { code } = transformSync(source, {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    })
    return [filePath, code]
  })
  .map(([filePath, source]) => {
    let exports = {}
    let module = { exports }
    eval(source)
    fs.writeFileSync(`${cache}/${filePath}.js`, source)
    return [filePath, exports.default]
  })
  .map(([filePath, html]) => {
    fs.writeFileSync(`${dist}/${filePath.split('.mdx')[0]}.html`, wrapWithBootstrap(html, filePath))
  })
