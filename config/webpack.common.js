const webpack= require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');//打包html页面的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var px2rem = require('postcss-px2rem');

const ID_CONFIG = require('./id.config.js');
const env = process.env.NODE_ENV;
const ID_ENV = ID_CONFIG[env];
const devMode = env !== 'pro';



module.exports = {
	 entry: path.resolve(__dirname,'../src/entry/index.js'),
	 output:{
	 	path:path.resolve(__dirname,'../dist'),
	 	publicPath:'/',
	 	filename:'static/js/[name]-[hash:7].js'
	 },
	 module:{
	 	 rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
               
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [

                  { loader: MiniCssExtractPlugin.loader,options:{publicPath:'../'}},
                  // { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  {
                      loader:'postcss-loader',
                      options:{
                      config: {
                                path: path.resolve(__dirname, './postcss.js')
                            }
                    }},
                  
                    {
                    loader: "px2rem-loader",
                    options: {
                        remUni:'75',
                        remPrecision:3,//rem保留精度
                        baseDpr:2,//设计搞设备像素
                        remVersion:true,//是否生成rem版本样式表
                        threeVersion:false,//是否生成@x1、@x2、@x3样式表

                    }}
                    
                ]
            },
             {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
              loader: 'url-loader',
              options: {
                limit: 1000
              }
            }
        ]
	 },
	 plugins: [
        new htmlWebpackPlugin({//生成html
            //title: 'Skybay',//只有 filename: '../dist/index.html'生效
            filename: 'index.html',
            template: path.resolve(__dirname,'../src/index.html'),
            inject: 'body',           //script标签的放置
            favicon:path.resolve(__dirname,'../src/favicon.ico'),
            minify: {                    //html压缩
             removeComments: !devMode,     //移除注释
             collapseWhitespace: !devMode //移除空格
             },
      
        }),
        new webpack.DefinePlugin({//定义环境变量
            'process.env': {
                
                'ID_CONFIG': JSON.stringify(ID_ENV)
             }
        }),
        new MiniCssExtractPlugin({
              filename: 'static/css/[name].[hash].css',
              chunkFilename: 'static/css/[name].[hash].css',
            })
      
    ]
}