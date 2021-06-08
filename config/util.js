const path = require('path');
const environment = require('./environment');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.configureCssLoaders = prod => {
  const loaders = [];
  if (prod) {
    loaders.push({
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js'),
        },
      },
    });
  }
  loaders.push({
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  });
  return [
    {
      test: /\.(css|sass|scss)$/,
      use: [
        {
          loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2,
          },
        },
        ...loaders,
      ],
    },
  ];
};
