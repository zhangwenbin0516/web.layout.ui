import webpack from "webpack";
import path from "path";
import devServer from 'webpack-dev-server';
const merge: any = require('webpack-merge');

import config from './webpack.base';
import WebpackConfig from './webpack.config';

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
const setting = WebpackConfig[env];
// 合并webpack配置
const options: webpack.Configuration = merge(config, {
  mode,
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssOption },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')]
              }
            }
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssOption },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')]
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
})

// 配置webpack-dev-server环境
const complier: webpack.Compiler = webpack(options);

const server: any = new devServer(complier, {
  hot: true,
  host: setting.host,
  port: setting.port,
  open: true,
  historyApiFallback: true
});

// 启动服务
server.listen()