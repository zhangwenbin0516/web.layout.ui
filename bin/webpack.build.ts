import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import config from './webpack.base';
// import WebpackConfig from './webpack.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// 获取环境参数
let argvs: any = process.env.npm_config_argv;
try {
  argvs = JSON.parse(argvs);
} catch(e) {
  console.error(e);
}

// 解析环境参数
let argv: Array<string> = argvs.cooked || argvs.original || [];
let mode: string|null = argv.find(key => key === 'client') ? 'development' : 'production';
let env: any = argv.find(key => /\-\-/.test(key)) || 'dev';
env = env.replace('--', '');
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

const options: webpack.Configuration = merge(config, {
  mode,
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
    })
  ]
})

webpack(options);