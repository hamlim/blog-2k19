import { styles } from './styles.js'
import build from './index.js'

// build posts
build({
  src: './posts',
  dist: './dist/posts',
  cache: './dist/cache/posts',
  styles,
  fileContextPath: '../src/components/file-context.js',
  additionalImports: `import Header from '../src/components/header.js'`,
  additionalComponents: 'Header',
})

// build static pages
build({
  src: './src',
  dist: './dist',
  cache: './dist/cache',
  styles,
  fileContextPath: '../src/components/file-context.js',
  additionalImports: `import Header from '../src/components/header.js'`,
  additionalComponents: 'Header',
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})
