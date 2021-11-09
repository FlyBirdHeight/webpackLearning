const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|git|png|svg)$/,
                // use: [
                //     // {
                //     //     loader: 'file-loader',
                //     //     options: {
                //     //         name: '[name][hash:6].[ext]',
                //     //         outputPath: 'img'
                //     //     }
                //     // }
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             name: 'img/[name][hash:6].[ext]',
                //             limit: 25 * 1024
                //         }
                //     }
                // ]
                type: 'asset',
                generator: {
                    filename: 'img/[name][hash:4].[ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name][hash:4].[ext]'
                }
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            CleanStaleWebPackageAssets: true
        }),
        new HtmlWebpackPlugin({
            title: 'adsionli的webpack学习之路',
            template: './public/index.html'
        }),
        new DefinePlugin({
            BASE_URL: '"./"'
        })
    ]
}