const path = require('path');
const merge = require('webpack-merge');
const WebpackConfig = require('./webpack.base');
const cssOption = {
    url: true,
    esModule: true,
    sourceMap: true,
    modules: {
        mode: 'local',
        localIdentName: "[name]_[local]"
    }
};
module.exports = merge(WebpackConfig, {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: '3590',
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: cssOption
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: cssOption
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
})