const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));

app.listen(3000, '127.0.0.1', function(){
    console.log('listen http://127.0.0.1:3000!')
})
