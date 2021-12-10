interface Config {
  [key: string]: {
    [val: string]: string
  }
}
const path = require('path');
const config: Config = {
  dev: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    host: 'localhost',
    port: '3400'
  },
  test: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    host: 'localhost',
    port: '3400'
  },
  sit: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    host: 'localhost',
    port: '3400'
  },
  pre: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    host: 'localhost',
    port: '3400'
  },
  pro: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    host: 'localhost',
    port: '3400'
  }
}
export default config