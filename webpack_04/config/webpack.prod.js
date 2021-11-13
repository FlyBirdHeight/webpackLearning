module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: "web",
    //如果开启在node api中，这里就不要配置devServer，将配置写在启动Node服务的地方
    devServer: {
        hot: true
    },
    optimization: {
        moduleIds: 'named'
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
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: [
                            '**/index.html'
                        ]
                    }
                }
            ]
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}