const fs = require('fs')
const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module : {
    rules: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          'presets': [
            'es2016',
            'react'
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
    new webpack.ProvidePlugin({ autobind: ['autobind-decorator', 'default'] }),
    new webpack.DefinePlugin({
      IsNode: false,
      IsChrome: true
    })
  ]
}

module.exports = config
