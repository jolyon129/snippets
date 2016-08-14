'use strict'

let path = require('path')
let webpack = require('webpack')
// let HtmlWebpackPlugin = require('html-webpack-plugin')

// 路径
let ROOT_PATH = path.resolve(__dirname)
let SRC_PATH = path.resolve(ROOT_PATH, 'src')
let BUILD_PATH = path.resolve(ROOT_PATH, 'dist')

// info matter
var pkg = require('./package.json')
var banner = pkg.name + " " + pkg.version +
            "\n" + new Date().toLocaleDateString() + " " + pkg.author +
            "\n" + pkg.homepage;

module.exports = {
    entry: {
        app: path.resolve(SRC_PATH, 'main.js'),
        vendors: ['vue', 'vue-router', 'es6-promise']
        // vendors: ['vue', 'vue-router', 'es6-promise', require.resolve('./src/highlight/highlight.pack.js')require.resolve('./src/highlight/highlight.pack.js')]
    },
    output: {
        path: BUILD_PATH,
        publicPath: 'dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[chunkhash:8].js'
    },

    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },{
            test: /\.json$/,
            loader: 'json'
        },{
            test: /\.css$/, loader: "style!css"
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [

    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        stats: { colors: true },
        host: '0.0.0.0'
    },
    // debug解释器
    devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    // disbale devtool
    delete module.exports.devtool;

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurrenceOrderPlugin(),
        // pack common chunks
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
        new webpack.BannerPlugin(banner)
    ])
}
