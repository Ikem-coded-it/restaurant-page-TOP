const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin'); // left here incase i need to refer back

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map', // for finding errors
    devServer: {
        static: './dist'
    },
    // plugins: [
    //     new HtmlWebpackPlugin({ // for updating html each time i run build
    //     title: 'HungryMan Chows',
    //     }),
    // ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    // optimization: { // added coz i have more than one entrypoint on a single HTML page.
    //     runtimeChunk: 'single',
    // },
}