const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  devServer: {
    publicPath: 'http://localhost:8080/',
    host: 'localhost',
    port: 8080,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index/index.pug',
    }),
  ],
  module: {
    rules:
      [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
        },
        {
          test: /\.styl$/,
          use: [
            { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer'),
                  require('postcss-normalize'),
                ],
              },
			      },
            'stylus-loader',
          ],
        },
        {
          test: /\.css$/,
          use:
            [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: [
                    require('autoprefixer'),
                    require('postcss-normalize'),
                  ],
                },
				      },
					  ],
        },
        {
          test: /\.(jpg|png|svg)$/,
          exclude: [/fonts/, /favicons/],
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/img',
          },
        },
        {
          test: /\.(ttf|svg|woff)$/,
          exclude:[/common.blocks/, /favicons/],
          use: {
            loader: 'file-loader',
            options: { 
              name: '[name].[ext]',
              outputPath: './assets/fonts',
            },
		      },
		    },
        {
          test: /\.(svg|png|ico|xml)$/,
          exclude:[/common.blocks/, /fonts/],
          use: {
            loader: 'file-loader',
            options: { 
              name: '[name].[ext]',
              outputPath: './assets/favicons',
            },
		      },
		    },
      ],
  },
};
