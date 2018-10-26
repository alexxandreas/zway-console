// const path = require('path');

// const webpack = require('webpack');
// const _ = require('lodash');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const NodemonPlugin = require('nodemon-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const postcssNested = require('postcss-nested');


// const distPath = PUBLISH ? 'dist' : 'dist-developement';
// const clientOutputPath = `${__dirname}/${distPath}/client`;


// const clientPlugins = [];

// clientPlugins.push(new CleanWebpackPlugin([clientOutputPath], {
//     root: __dirname,
//     verbose: true,
//     dry: false
// }));


// clientPlugins.push(new ProgressBarPlugin({
//     format: '  Client [:bar] :percent (:elapsed seconds)',
//     clear: false
// }));


const server = {
    context: __dirname,
    mode: 'development',
    // stats: {
    //     excludeAssets: /static\/.*/,
    //     children: false
    // },
    entry: {
        main: `${__dirname}/src/index.js`
    },
    output: {
        path: `${__dirname}`,
        filename: 'module.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    },
    optimization: {
        // removeAvailableModules: true,
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendor',
        //             chunks: 'all'
        //         }
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                //exclude: /(node_modules|libs)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: ['lodash'],
                        presets: ['@babel/preset-env']
                    }
                }]
            },
        ] // rules
    }, // modules
    // plugins: clientPlugins,
    devtool: false
};

module.exports = server;
