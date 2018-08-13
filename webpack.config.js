const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
      contentBase: path.resolve(__dirname, 'docs'),
      publicPath: './',
      host: 'localhost',
      port: 8080
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
            use: [
            	'style-loader',
            	{ loader: 'css-loader', options: { importLoaders: 1 } },
            	{
				      loader: 'postcss-loader',
				      options: {
				        ident: 'postcss',
				        plugins: [
				          require('autoprefixer')({browsers:['last 2 version']}),
				          require('postcss-normalize')({browsers:['last 2 version']})]
				      			}
				},
            	'stylus-loader']
        },
        {
                test: /\.css$/,
                use: [
                	'style-loader',
                	{ loader: 'css-loader', options: { importLoaders: 1 } },
                	{
				      loader: 'postcss-loader',
				      options: {
				        ident: 'postcss',
				        plugins: [
				          require('autoprefixer')({browsers:['last 2 version']}),
				          require('postcss-normalize')({browsers:['last 2 version']})]
				      			}
				}
					]
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