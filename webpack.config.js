const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TaskHub',
            filename: 'home.html',
            template: 'src/template.html',

        }),
        new HtmlWebpackPlugin({
            title: 'TaskHub',
            filename: 'calendar.html',
            template: 'src/calendar.html',
        }),
        new HtmlWebpackPlugin({
            title: 'TaskHub',
            filename: 'projects.html',
            template: 'src/projects.html',
        }),
        new HtmlWebpackPlugin({
            title: 'TaskHub',
            filename: 'task.html',
            template: 'src/task.html',
        }),
        new HtmlWebpackPlugin({
            title: 'TaskHub',
            filename: 'about.html',
            template: 'src/about.html',
        }),
    ],

}
