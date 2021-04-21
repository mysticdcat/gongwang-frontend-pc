const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack = require('happypack');
const os = require('os');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const cwd = process.cwd();
var env;

if (process.env.NODE_ENV === 'development') {
    env = 'development';
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
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: resolve('src/main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/'
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'views': resolve('src/views'),
            'services': resolve('src/services'),
            'plugins': resolve('src/plugins'),
            'components': resolve('src/components'),
            'directives': resolve('src/directives'),
            'mixins': resolve('src/mixins'),
            'libs': resolve('src/libs'),
            'config': resolve('config.js'),
            '@': resolve('static')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ['vue-style-loader', 'css-loader', {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('autoprefixer')({
                                        overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
                                    })
                                ]
                            }
                        }, {
                                loader: 'px2rem-loader',
                                options: {
                                    remUnit: 37.5,
                                    remPrecision: 8
                                }
                            }, 'sass-loader']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')({
                                overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
                            })
                        ]
                    }
                }, {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 37.5,
                            remPrecision: 8
                        }
                    }, 'sass-loader']
            },
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                include: resolve('src'),
                use: 'happypack/loader?id=babel'
                // use:'babel-loader?cacheDirectory'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: 'static/img/[name].[hash:7].[ext]'
                    }
                }]

            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: 'static/font/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader?cacheDirectory'],
            threadPool: happyThreadPool,
            verbose: true
        }),
        new webpack.DefinePlugin({
            GZG_ENV: JSON.stringify(env)
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        })
    ],
    devServer: {
        host: '0.0.0.0',
        contentBase: './dist',
        allowedHosts: [
            'h5.gongzhugou.com'
        ],
        port: 8029,
        hot: true,
        overlay: {
            errors: true,
        },
        historyApiFallback: {
            // HTML5 history模式
            rewrites: [{ from: /.*/, to: "/index.html" }]
        },
        proxy: {
            '/api': {
                target: 'https://apishbn.gongzhugou.vip',
                // pathRewrite: {'^/api' : ''},
                changeOrigin: true
            },
        },
        disableHostCheck: true
    },
}
