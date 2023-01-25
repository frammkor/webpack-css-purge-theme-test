const webpack = require('webpack');
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssThemesWebpackPlugin = require('mini-css-themes-plugin');

const config = {
    entry: './src/index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            templateContent: ({htmlWebpackPlugin}) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        new MiniCssThemesWebpackPlugin({
            themes: {
                'baseTheme': './src/styles/base.scss',
                'hmc': './src/styles/hmc.scss',
                'as1': './src/styles/as1.scss',
            },
            defaultTheme: 'baseTheme'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            '...', // Use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};

module.exports = config;
