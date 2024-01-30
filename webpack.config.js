const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: false,
    client: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dropdown-example',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

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
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};