const RemoveStrictPlugin = require( 'remove-strict-webpack-plugin' );
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        main: `${__dirname}/src/server/index.js`
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

const client = {
    context: __dirname,
    mode: 'development',
    // stats: {
    //     excludeAssets: /static\/.*/,
    //     children: false
    // },
    entry: {
        app: `${__dirname}/src/client/index.js`
    },
    output: {
        path: `${__dirname}/htdocs`,
        // filename: 'app.js'
        filename: '[name].js'
        // libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    },
    optimization: {
        removeAvailableModules: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
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
                        // presets: ['es2015', 'react', 'stage-0']
                        // presets: ['@babel/preset-env']
                        presets: [
                            "@babel/preset-react",
                            [
                                "@babel/preset-env",
                                {
                        //             "targets": {
				                    //     "browsers": ["node 0.10.0", "ie >= 6"]
			                     //   },
                                    // "useBuiltIns": "entry",
                                    // modules: false
                                 }
                            ],
                            
                        ]
                    }
                }]
            },
        ] // rules
    }, // modules
    plugins: [
        // new RemoveStrictPlugin()
        new CopyWebpackPlugin([
            { from: `${__dirname}/src/client/index.html`, to: 'index.html' },
            { from: `${__dirname}/src/client/app.css`, to: 'app.css' }
        ])
    ],
    devtool: 'source-map'
};

module.exports = [server, client];
