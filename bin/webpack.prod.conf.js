const path = require('path');
const merge = require('webpack-merge');
const WebpackConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssOptions = {
    url: true,
    esModule: true,
    sourceMap: true,
    modules: {
        mode: 'local',
        localIdentName: "[name]_[local]_[hash:base64:9]"
    }
};
module.exports = merge(WebpackConfig, {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
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
        rules: [{
                test: /\.css$/,
                include: [/src/, /es/, /lib/],
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                include: [/src/, /es/, /lib/],
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: cssOptions
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
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/,
                include: [/src/, /es/, /lib/],
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: cssOptions
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
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:9].css',
            chunkFilename: 'css/[id].[chunkhash:9].css'
        })
    ]
})