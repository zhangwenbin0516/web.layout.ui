import webpack from 'webpack';
import path from 'path';
import options from './webpack.config';

let argvs: any = process.env.npm_config_argv;
try {
  argvs = JSON.parse(argvs);
} catch(e) {
  console.error(e);
}
let argv: Array<string> = argvs.cooked || argvs.original || [];
let env: any = argv.find(key => /\-\-/.test(key)) || 'dev';
env = env.replace('--', '');
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
      }
    ]
  },
  plugins: [
  ]
}

export default config;