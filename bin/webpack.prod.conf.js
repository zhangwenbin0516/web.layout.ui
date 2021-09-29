const path = require('path');
const { merge } = require('webpack-merge');
const WebpackConfig = require('./webpack.base');
module.exports = merge(WebpackConfig, {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
        common: ['react', 'react-dom', 'react-router-dom']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.css$/,
                include: [/src/, /es/, /lib/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            esModule: true,
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                auto: true,
                                nameExport: true,
                                localIdentContenxt: path.resolve(__dirname, '..'),
                                localIdentName: "[name]_[local]_[hash:base64:9]"
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /.(c|le)ss$/,
                include: [/src/, /es/, /lib/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            esModule: true,
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                auto: true,
                                nameExport: true,
                                localIdentContenxt: path.resolve(__dirname, '..'),
                                localIdentName: "[name]_[local]_[hash:base64:9]"
                            }
                        }
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
                test: /.(sc|sa|c)ss$/,
                include: [/src/, /es/, /lib/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            esModule: true,
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                auto: true,
                                nameExport: true,
                                localIdentContenxt: path.resolve(__dirname, '..'),
                                localIdentName: "[name]_[local]_[hash:base64:9]"
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {

                            },
                            implementation: require('sass')
                        }
                    }
                ],
                exclude: /node_modules/
            },
        ]
    }
})