const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4003/',
  },
  devServer: {
    port: 4003,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
