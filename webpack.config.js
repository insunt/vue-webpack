var webpack = require('webpack');

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: '/dist/bundle',
        publicPath: '/bundle/',
        filename: 'app.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=1000&mimeType=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        moduleDirectories: ['node_modules']
    }
};