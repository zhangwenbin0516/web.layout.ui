import webpack from "webpack";
import devServer from 'webpack-dev-server';
const merge: any = require('webpack-merge');

import config from './webpack.base';

let argvs: any = process.env.npm_config_argv;
try {
  argvs = JSON.parse(argvs);
} catch(e) {
  console.error(e);
}
let argv: Array<string> = argvs.cooked || argvs.original || [];
let mode: string|null = argv.find(key => key === 'client') ? 'development' : 'production';
let env: any = argv.find(key => /\-\-/.test(key)) || 'dev';
env = env.replace('--', '');
const options: webpack.Configuration = merge(config, {
  mode,
})
const complier: webpack.Compiler = webpack(options);

const server: any = new devServer(complier, {
  hot: true,
});

server.listen()