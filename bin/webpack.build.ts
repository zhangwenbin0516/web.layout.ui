import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import config from './webpack.base';
// import WebpackConfig from './webpack.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// 获取环境参数
let argvs: Array<string> = process.argv;

// 解析环境参数
let env: any = argvs.find(key => key.indexOf('$env') > -1) || 'dev';
env = env.replace('$env=', '');
process.env.$env = env;

// 配置css-modules
const cssOption = {
  url: true,
  esModule: true,
  sourceMap: true,
  modules: {
      mode: 'local',
      localIdentName: "[name]_[local]"
  }
};

// 当前环境设置参数
// const setting = WebpackConfig[env];

const options: any = merge(config, {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
    common: ['react', 'react-dom', 'react-router-dom']
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer'), require('cssnano')]
              }
            }
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: cssOption },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer'), require('cssnano')]
              }
            }
          },
          { 
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                relativeUrls: true
              },
              implementation: require('less')
            }
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.(sc|sa)ss$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: cssOption },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer'), require('cssnano')]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                  fiber: require('fibers')
              },
              implementation: require('sass')
            }
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules')
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:9].css',
      chunkFilename: 'css/[id].[chunkhash:9].css'
    }),
    new webpack.ProgressPlugin(function(percentage, message, ...args) {
      console.log(percentage, message, ...args)
    })
  ]
});
const complier:any = webpack(options);
complier.run();