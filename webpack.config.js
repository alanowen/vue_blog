const path = require('path')
const process = require('process')
const fs = require('fs')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const webpack = require('webpack')

module.exports = (env, argv) => {

    const devMode = argv.mode === 'development'

    fs.open('./src/config/env.js', 'w', function(err, fd) {
        let buf = 'export default "development";'
        if (!devMode) {
            buf = 'export default "production";'
        }
        fs.write(fd, buf, 0, buf.length, function(err, written, buffer) {})
    })


    let config = {
        entry: {
            main: path.resolve(__dirname, './src/main.js'),
            vendors: path.resolve(__dirname, './src/vendors.js')
        },

        output: {
            path: path.resolve(__dirname, './dist'),
            filename: !devMode ? '[name].[hash].js' : '[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader'
                        }
                    ],
                    exclude: /node_modules/
                },
                { 
                    test: /\.js$/, 
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ],
                    exclude: /node_modules/
                },
                { test: /\.css$/, use: [ devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'] },
                { test: /\.(styl)|(stylus)$/, use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'] },
                { test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/, use: 'file-loader' }
            ]
        },

        plugins: [

            new CleanWebpackPlugin(['dist']),

            new VueLoaderPlugin(),

            new MiniCssExtractPlugin(
                {
                    filename: devMode ? '[name].css' : '[name].[hash].css',
                    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                }
            ),

            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['main', 'vendors'],
                template: path.resolve(__dirname, './src/assets/templates/index.html')
            })
        ],

        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                '@libs': path.resolve(__dirname, './src/libs'),
                '@components': path.resolve(__dirname, './src/components'),
                '@assets': path.resolve(__dirname, './src/assets'),
                '@@config': path.resolve(__dirname, './src/config/config.js'),
                '@@env': path.resolve(__dirname, './src/config/env.js')
            }
        }
    }

    if (devMode) {
        config['plugins'].push(
            new webpack.EvalSourceMapDevToolPlugin(
                {
                    filename: '[name].js.map',
                    exclude: ['vendors.js']
                }
            )
        )
    }

    return config
}