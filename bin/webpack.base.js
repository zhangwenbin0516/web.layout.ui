const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  output: {
    filename: 'js/[name].[contenthash:7].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[id].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css', '.json', 'index.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@es': path.resolve(__dirname, '../es'),
      '@lib': path.resolve(__dirname, '../lib')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /.html?$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../static/index.html'),
      filename: 'index.html'
    })
  ]
}