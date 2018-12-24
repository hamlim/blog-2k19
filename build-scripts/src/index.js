import bundler from '@native-bundler/core'

bundler({
  entry: './site/src/index.js',
  out: './site/dist/index.js',
  config: {
    cacheExternals: true,
  },
})
