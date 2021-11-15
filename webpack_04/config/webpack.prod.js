const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            CleanStaleWebPackageAssets: true
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
        })
    ]
}