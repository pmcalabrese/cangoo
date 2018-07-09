const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const serverConfig = {
    mode: 'development',
    target: 'web',
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'src/index.html', to: 'index.html' }])
    ],
    devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map'
};

module.exports = [ serverConfig ];