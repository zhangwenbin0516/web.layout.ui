import webpack from "webpack";
import devServer from 'webpack-dev-server';

import config from './webpack.base';
const complier = webpack(config);

const server = new devServer(complier, {
  
});