var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {	
        index : './script/src/entry.js',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'public/js/'),
       	filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','style']
    },
    module: {	
	    loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-3', 'react']
            }
        },{
            test:/\.css$/,
            exclude:/node_modules/,
            loaders:['style','css']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor',filename: 'vendor.js'}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'script/templates/backend.html'),
            filename: path.join(__dirname, 'template/backend.html')
        })
    ]
}
