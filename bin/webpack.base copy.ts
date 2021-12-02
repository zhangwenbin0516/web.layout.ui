const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  target: 'web',
  output: {
    filename: 'js/[name].[contenthash:7].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[id].[contenthash:7].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css', '.json', 'index.js', '.less', '.scss', '.md'],
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
        test: /\.(png|gif|jpg|jpeg)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[contenthash:9].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /.html?$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "raw-loader",
          },
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