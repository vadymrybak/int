var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');
var webpack = require('webpack');

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    // the main source code file
    mode: 'production',
    entry: {
        index: { import: './src/index.ts' },
        tracer: { import: './src/tracer.ts' }
    },
    output: {
        // the output file name
        filename: '[name].js',
        // the output path               
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // all files with a `.ts` extension will be handled by `ts-loader`
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    target: "node",
    // externals: ['typescript', 'tslint', 'webpack', 'webpack-cli'],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        // new webpack.DefinePlugin(envKeys)
    ]
};