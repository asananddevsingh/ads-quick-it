const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4002/',
  },
  devServer: {
    port: 4002,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
