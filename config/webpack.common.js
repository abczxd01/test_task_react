const path = require('path');
const fs = require('fs');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = require('./environment');


module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output:{
    path: environment.paths.output,
    filename: 'assets/js/[name].[chunkhash].js',
    assetModuleFilename: 'asset/images/[name].[hash][ext]',
  },
  entry: {
    main: path.resolve(environment.paths.source, 'index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(environment.paths.source, 'index.html'),
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
