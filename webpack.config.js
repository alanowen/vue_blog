const path = require('path')
const process = require('process')
const fs = require('fs')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {

    fs.open('./src/config/env.js', 'w', function(err, fd) {
        let buf = 'export default "development";'
        if (argv.mode == "production") {
            buf = 'export default "production";'
        }
        fs.write(fd, buf, 0, buf.length, function(err, written, buffer) {})
    })


    let config = {
        entry: {
            main: path.resolve(__dirname, './src/main.js'),
            vendor: path.resolve(__dirname, './src/vendor.js')
        },

        output: {
            path: path.resolve(__dirname, './dist'),
            filename: argv.mode == 'production' ? '[name].[hash].js' : '[name].js'
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
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
                { test: /\.stylus$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
                { test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/, use: 'file-loader' }
            ]
        },

        plugins: [
            new VueLoaderPlugin(),

            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['main', 'vendor'],
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

    if (argv.mode == "development") {
        config['plugins'].push(new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
        }))
    }

    return config
}