'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const cwd = process.cwd();
var env;

if (process.env.NODE_ENV === 'development' ) {
    env =  'development';
} else if (process.env.NODE_ENV === 'release') {
    env = 'release';
} else if (process.env.NODE_ENV === 'production') {
    env = 'production';
} else if (process.env.NODE_ENV === 'debug') {
    env = 'debug';
}

const resolve = (dir) => {
    return path.join(cwd, dir);
};

module.exports = {
    mode:'production',
    devtool:'none',
    entry:{
        app: resolve('src/main.js')
    },
    output:{
        path: resolve('./dist'),
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: '/'
    },
    watchOptions:{
        ignored: /node_modules/,
        aggregateTimeout:300,
        poll:1000
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias:{
            'vue$': 'vue/dist/vue.common.js',
            'views': resolve('src/views'),
            '@': resolve('static'),
            'views': resolve('src/views'),
            'components': resolve('src/components'),
            'config': resolve('config.js')
        }
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders: {
                        scss:[MiniCssExtractPlugin.loader,'vue-style-loader', 'css-loader', {
                            loader: 'postcss-loader',
                            options:{
                                plugins: () => [
                                    require('autoprefixer')({
                                        overrideBrowserslist:['last 2 version', '>1%', 'ios 7']
                                    })
                                ]
                            }
                        },'sass-loader']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options:{
                        plugins: () => [
                            require('autoprefixer')({
                                overrideBrowserslist:['last 2 version', '>1%', 'ios 7']
                            })
                        ]
                    }
                }, 'sass-loader']
            },
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                include: resolve('src'),
                use:'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use:[{
                    loader: 'url-loader',
                    options:{
                        limit:10240,
                        name: 'static/img/[name].[hash:7].[ext]'
                    }
                }]
                
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use:[{
                    loader: 'url-loader',
                    options:{
                        limit:10240,
                        name: 'static/font/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    },
    optimization:{
        splitChunks:{
            chunks:'all', // 1.async 异步引入的库进行分离(默认) 2.initial 同步引入的库进行分离 3.all 所有引入的库进行分离(推荐)
            // cacheGroups:{
            //     commons:{
            //         minChunks:2,
            //         chunks: 'all'
            //     }
            // }
            minSize: 30000, // 分割新代码最小的体积
            maxSize: 0,
            minChunks: 1, // 在分割之前，代码块最小应该被引用的次数
            maxAsyncRequests:5, // 按需加载时最大的并行请求数
            maxInitialRequests:3, // 一个入口最大的并行请求书
            automaticNameDelimiter:'.',
            name:true,
            cacheGroups:{
                vendors:{
                    test: /[\\/]node_modules[\\/]/,
                    priority:-10 // 缓存组打包的先后优先级
                },
            }
        },
        // runtimeChunk:true
    },
    plugins:[
       
        new webpack.DefinePlugin({
            GZG_ENV:JSON.stringify(env)
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css'
        }),
        new optimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename: 'index.html',
            inject: true,
            minify:{
                html5:true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS:true,
                minifyJS:true,
                removeComments: false
            }
        }),
        new HtmlWebpackExternalsPlugin({
            externals:[
                {
                    module: 'vue',
                    entry: '//cdn.gongzhugou.vip/vue/2.6.10/vue.min.js',
                    global: 'Vue'
                },
                {
                    module: 'vue-router',
                    entry: '//cdn.gongzhugou.vip/vue-router/3.1.3/vue-router.min.js',
                    global: 'VueRouter'
                },
                {
                    module: 'vuex',
                    entry: '//cdn.gongzhugou.vip/vuex/3.1.1/vuex.min.js',
                    global: 'Vuex'
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
}