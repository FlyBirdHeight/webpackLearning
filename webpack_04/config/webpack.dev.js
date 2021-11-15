const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: "web",
    //如果开启在node api中，这里就不要配置devServer，将配置写在启动Node服务的地方
    devServer: {
        hot: true,
        hotOnly: true,
        port: 8888,
        host: '0.0.0.0',
        //默认为false，需要自己开启
        watchContentBase: true,
        compress: true,
        historyApiFallback: true
    },
    optimization: {
        moduleIds: 'named'
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            CleanStaleWebPackageAssets: true
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