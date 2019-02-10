module.exports = api => {
  api.cache.never()
  return {
    presets: ['babel-preset-gatsby', '@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  }
}
