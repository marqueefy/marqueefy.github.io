'use strict'

const path = require('node:path')
const { babel } = require('@rollup/plugin-babel')
const banner = require('./banner.js')

const ESM = process.env.ESM === 'true'

const fileDestination = `marqueefy${ESM ? '.esm' : ''}`
const external = []
const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'bundled'
  })
]
const globals = {}

const rollupConfig = {
  input: path.resolve(__dirname, `../js/index.${ESM ? 'esm' : 'umd'}.js`),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDestination}.js`),
    format: ESM ? 'esm' : 'umd',
    globals,
    generatedCode: 'es2015'
  },
  external,
  plugins
}

if (!ESM) {
  rollupConfig.output.name = 'marqueefy'
}

module.exports = rollupConfig
