import webpack from 'webpack';
import path from 'path';
import options from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

let env: any = process.env.$env || 'dev';
const setting = options[env];
const config: webpack.Configuration = {
  output: {
    filename: 'js/[name].[contenthash:7].js',
    chunkFilename: 'js/[id].[contenthash:7].js',
    path: setting.assetsPath,
    publicPath: setting.publicPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.less', '.sass', '.json', 'index.ts', 'index.tsx', 'index.js', 'index.jsx', '.md'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@es': path.resolve(__dirname, '../es'),
      '@lib': path.resolve(__dirname, '../lib')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, '../node_modules')
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

export default config;