import bundler from '@native-bundler/core'

bundler({
  entry: './src/index.js',
  out: './dist',
  config: {
    cacheExternals: true,
  },
  cache: new Map(),
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})
