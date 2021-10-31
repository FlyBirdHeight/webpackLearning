const path = require('path')
module.exports = {
    entry: './src/main.js',
    //output中的path路径必须是一个绝对路径
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader',
                    'css-loader',
                    'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    'css-loader',
                    //这里回去直接在根目录查找postcss.config.js，这里就可以很简写了
                    'postcss-loader',
                    'sass-loader']
            }
        ]
    }
}