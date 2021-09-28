const path = require('path');
const { merge } = require('webpack-merge');
const WebpackConfig = require('./webpack.base');
module.exports = merge(WebpackConfig, {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../index.js'),
        common: ['react', 'react-dom', 'react-router-dom']
    },
    devtool: 'source-map',
})