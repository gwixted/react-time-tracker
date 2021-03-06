const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = env => {

  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {

    // entry tells webpack where to start looking
    entry: {
      app: path.join(__dirname, '../src/'),
      vendor: ['react','react-dom','react-router'],
      entry: [ // allows for hot reload
        'webpack-dev-server/client?http://localhost:1111',
      ],
    },
    /*
      output tells webpack where to dump the files it has processed.
      [name].[hash].js will output something like app.3531f6aadj8ldf094u.js
    */
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, '../build/'),
    },

    module: {
      loaders: [ // loaders allow you to preprocess files
        {
          test: /\.js$/, // look for .js files
          exclude: /node_modules/,
          loader: 'babel-loader', // preprocess with babel
          query: {
            cacheDirectory: true,
          },
        },
      ],
    },

    plugins: removeEmpty([
      // used to split out our specified vendor script
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),

      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body'
      }),

      new OpenBrowserPlugin({ url: 'http://localhost:1111' }),
      
      // Only running DedupePlugin() and UglifyJsPlugin() in production
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          'screw_ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      })),
    ]),
  };
};
