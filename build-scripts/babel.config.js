module.exports = function(api) {
  api.cache.never()
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
          modules: false,
        },
      ],
    ],
  }
}
