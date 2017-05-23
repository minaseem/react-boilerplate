/**
 * Created by imamudinnaseem on 5/17/17.
 */

'use strict'

const webpack = require('webpack');
const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3000
module.exports = {
    port: PORT,
    webpack: {
        watch: true,
        devtool: 'eval',
        entry: {
            'app': [
                'babel-polyfill',
                'react-hot-loader/patch',
                './src/index'
            ]
        },
        devServer: {
            port: PORT
        },
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
                {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
                {test: /\.svg?name=[name].[ext]$/, loader: 'file-loader'},
                {test: /\.(svg)$/, use: 'file-loader'}
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                "React": "react"
            }),
            new Visualizer({
                filename: './statistics.html'
            }),
            new ExtractTextPlugin("styles.css"),
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve('', 'index.html'),
                minify: {
                    minifyJS: true,
                    minifyCSS: true,
                }
            })
        ]

    }
}
