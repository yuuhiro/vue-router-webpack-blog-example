const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", ['css??modules&impoerLoader', 'postcss']) },
      { test: /\.svg$/, loader: 'url?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url?mimetype=application/font-woff' },
      { test: /\.html$/, loader: "html" },
      { test: /\.jade$/, loader: "jade" }
    ]
  },
  postcss: [ autoprefixer() ],
  // Configuration for dev server
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin('./main.css'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      Vue: 'vue'
    }),
    new CopyWebpackPlugin([{ from: './src'}],
      { ignore: ['*.js', '*.css', '*.jade'] }
    ),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ]
};