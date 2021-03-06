const basePlugins = require('./plugins')

module.exports = function webPreset(_api, options = {}) {
  const {
    modules = 'commonjs',
    corejs = 2,
    debug = false,
    browsers,
    useBuiltIns = 'entry',
    typescript = false,
  } = options

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        targets: browsers,
        debug,
      },
    ],
  ]

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'))
  }

  return {
    presets,
    plugins: basePlugins(options),
  }
}
