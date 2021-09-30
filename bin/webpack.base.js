const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  output: {
    filename: 'js/[name].[contenthash:7].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[id].[contenthash:7].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css', '.json', 'index.js', '.less', '.scss'],
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
      filename: path.resolve(__dirname, '../dist/index.html'),
      inject: true,
      hash: true,
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true, // 压缩空格
      },
      favicon: path.resolve(__dirname, '../static/icoLogo.png')
    })
  ]
}