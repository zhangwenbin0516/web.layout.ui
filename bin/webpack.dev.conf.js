const path = require('path');
const { merge } = require('webpack-merge');
const WebpackConfig = require('./webpack.base');
module.exports = merge(WebpackConfig, {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: '3590',
        open: true,
        historyApiFallback: true
    }
})