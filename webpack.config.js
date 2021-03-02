const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, options) => {

  return {
    entry: './src/App.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'ts-loader',
          ],
        },
      ],
    },
    resolve: { extensions: ['*', '.ts', '.tsx', '.js'] },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: 'http://localhost:3000/',
      hotOnly: false,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
