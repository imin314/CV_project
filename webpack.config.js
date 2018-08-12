const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
      contentBase: './docs'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.pug',
    })
    ],
    module: {
    rules: [
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        },
        {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
        },
        {
  			test: /\.(ttf|svg|eot|woff)$/,
  			exclude: [/img/],
		  	use: {
		    loader: 'file-loader',
		    options: {
		    name: "./assets/fonts/[name].[ext]"
		    },
		  },
		},
		{
		test: /\.(jpg|png|svg)$/,
		exclude: [/fonts/],
        loader: 'file-loader',
        options: {
        name: './assets/img/[name].[ext]'
                 },
         }
    ]
    }
};