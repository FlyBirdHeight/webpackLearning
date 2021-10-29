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
            // {
            //     test: /\.css$/, //test一般是一个正则表达式，用来匹配需要处理的文件的类型
            //     use: [
            //         {
            //             loader: 'css-loader'
            //         }
            //     ]
            // },
            //下面的写法都是简写，主要是当loader没有什么特殊需要的时候，比如不需要额外参数options配置时，就可以使用
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            // {
            //     test: /\.css$/,
            //     use: ['css-loader']
            // }
        ]
    }
}