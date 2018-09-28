const webpack= require('webpack')
const path = require('path');//nodejs自带的path路径
const webpackMerge = require('webpack-merge');
const webpackageModule = require('./webpack.common.js');

module.exports = webpackMerge(webpackageModule,{
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        compress: true,
        port: 9000,
        proxy:{
        	'/api':'http://47.98.203.55'
        }
      }

})