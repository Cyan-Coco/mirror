let path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(png|jpg|svg|gif)$/, use: 'url-loader'},
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    devtool: 'cheap-module-source-map'
}