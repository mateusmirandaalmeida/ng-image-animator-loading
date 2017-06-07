const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'ng-image-animator-loading.js'
    },
    plugins: [
      new ExtractTextPlugin({
            filename: "ng-image-animator-loading.min.css",
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff2|woff|ttf)$/i,
                use: "file-loader?name=public/icons/[name].[ext]"
            }
        ]
    }
};
