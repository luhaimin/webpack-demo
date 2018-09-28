const path = require('path');//nodejs自带的path路径
const webpackMerge = require('webpack-merge');
const webpackageModule = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function copyAssets(){
return (
		new CopyWebpackPlugin([
    			{from:path.resolve(__dirname,'../src/edm'),to:path.resolve(__dirname,'../dist/edm')}
    		])
	)
}

function uglifyFnc(){
    return (
        new UglifyJsPlugin({
                            cache: true,//压缩后是否缓存
                            parallel: true,//异步功能，多任务执行，提高压缩速度（强烈建议），也可指定并行数量，如：parallel: 4
                            uglifyOptions:{
                                parse: {},
                                compress: {
                                    warnings: false,
                                    drop_debugger:true,
                                    drop_console: true
                                },
                                mangle: true, // Note `mangle.properties` is `false` by default.
                                output: null,
                                toplevel: false,
                                nameCache: null,
                                ie8: false,
                                keep_fnames: false,
                            }

                          })
        )
}




let cleanPath = [
    'dist'
]

module.exports = webpackMerge(webpackageModule,{
    mode: 'production',
    devtool:'none',
    plugins:[
    new CleanWebpackPlugin(cleanPath,{//打包之前先删除dist
        root:path.resolve(__dirname,"../")

    }),
    copyAssets(),//复制文件
     
    ],
    optimization:{
    	minimizer:[
    		new OptimizeCSSAssetsPlugin({}),//优化css：去空格(压缩)、去注释
            uglifyFnc(),
             new AutoDllPlugin({
                      inject: true, // will inject the DLL bundle to index.html
                      filename: '[name].dll.js',
                      path:'./dll/',
                      entry:{
                        vendor:[
                          'react'
                        ]
                      },
                      plugins:[
                          uglifyFnc()
                      ]
                    })
    	]
    }

})