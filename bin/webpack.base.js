const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    filename: 'js/[name].[contentHash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@es': path.resolve(__dirname, '../es')
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
              plugins: ['@babel/plugin-transform-runtime']
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../static/index.html'),
      filename: 'index.html'
    })
  ]
}