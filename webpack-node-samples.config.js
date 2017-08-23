const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src')

const entry = {}

fs.readdirSync('./src/samples')
  .filter(p => p.startsWith('sample-'))
  .forEach(p => entry[path.basename(p, '.js')] = APP_DIR + '/samples/' + p)

const config = {
  entry,
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  module : {
    rules: [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          'presets': [
            'es2016',
            ['env', { targets: { node: 'current' } }]
          ],
          'plugins': [
            'transform-runtime',
            'transform-decorators-legacy',
            'transform-object-rest-spread',
            'transform-function-bind',
            'transform-class-properties',
            'transform-async-to-generator',
            'transform-function-bind'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/), // when attempts to require this, but it is not needed in node build.
    new webpack.DefinePlugin({
      IsNode: true,
      IsChrome: false
    })
  ]
}

module.exports = config
