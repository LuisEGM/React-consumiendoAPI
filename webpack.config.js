const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: ['@babel/polyfill','./src/app/index.jsx']
    },

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js' 
    },
    
    devServer: {
        port: 3000
    },

    module: {
        rules: [
            {
                test: /(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                loader: ['style-loader','css-loader']
            }

        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}