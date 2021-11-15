const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolveApp = require('./paths')
const { merge } = require('webpack-merge');
//导入其他配置
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev')
//定义对象保存base配置信息
const commonConfig = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: resolveApp('./dist'),
    },
    resolve: {
        mainFiles: ['index', 'main'],
        extensions: ['.json', '.js', '.vue', '.scss', '.css'],
        alias: {
            '@': resolveApp('./src')
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
                            importLoaders: 2,
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
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'adsionli的webpack学习之路',
            template: './public/index.html'
        })
    ]
};

module.exports = (env) => {
    //根据当前的打包模式来合并配置
    const config = env.production ? prodConfig : devConfig;
    const returnConfig = merge(commonConfig, config);
    return returnConfig;
}