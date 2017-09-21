const webpack = require('webpack')
const merge = require('webpack-merge')
const UgligfyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    vendors: [
      'lodash',
      'react',
      'react-dom'
    ]
  },
  devtool: 'source-map',
  plugins: [
    new UgligfyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      minChunks: Infinity
    })
  ]
})
