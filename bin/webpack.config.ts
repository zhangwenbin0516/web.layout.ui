interface Config {
  [key: string]: {
    [val: string]: string
  }
}
const path = require('path');
const config: Config = {
  dev: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  test: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  sit: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  pre: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  pro: {
    assetsPath: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
}
export default config