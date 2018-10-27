const RemoveStrictPlugin = require( 'remove-strict-webpack-plugin' );


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
        filename: 'module.js',
        libraryTarget: 'commonjs'
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
                        // presets: ['@babel/preset-env']
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
				                        "browsers": ["node 0.10.0", "ie >= 6"]
			                        },
                                    // "useBuiltIns": "entry",
                                    // modules: false
                                 }
                            ]
                        ]
                    }
                }]
            },
        ] // rules
    }, // modules
    plugins: [
        new RemoveStrictPlugin()
    ],
    devtool: false
};

module.exports = server;
