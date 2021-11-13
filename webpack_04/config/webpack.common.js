const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = (env) => {
    if (env.production) {
        console.log('production')
    } else {
        console.log('development')
    }

    return {
        entry: './src/index.ts',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, '../dist'),
        },
        optimization: {
            moduleIds: 'named'
        },
        resolve: {
            mainFiles: ['index', 'main'],
            extensions: ['.json', '.js', '.vue', '.scss', '.css'],
            modules: ['node_modules', 'src/modules'],
            alias: {
                '@': path.resolve(__dirname, '../src')
            }
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
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.ts$/,
                    use: ['ts-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'adsionli的webpack学习之路',
                template: '../public/index.html'
            }),
            new DefinePlugin({
                BASE_URL: '"../"'
            })
        ]
    }
}