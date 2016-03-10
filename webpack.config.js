var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  var entry, jsLoaders, plugins, cssLoaders;

  switch (options.env) {
    case 'dev':
      entry = [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        path.resolve(__dirname, 'js/app.js')
      ];
      cssLoaders = 'style-loader!css-loader!postcss-loader';
      plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: true
        })
      ]

      break;
  }

  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "js/bundle.js"
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: path.join(__dirname, '/node_modules/')
        }, {
          test:   /\.css$/,
          loader: cssLoaders
        }, {
          test: /\.jpe?g$|\.gif$|\.png$/i,
          loader: "url-loader?limit=10000"
        }
      ]
    },
    plugins: plugins,
    postcss: function() {
      return [
        require('postcss-import')({
          glob: true,
          onImport: function (files) {
              files.forEach(this.addDependency);
          }.bind(this)
        }),
        require('postcss-simple-vars')(),
        require('postcss-focus')(),
        require('autoprefixer')({
          browsers: ['last 2 versions', 'IE > 8']
        }),
        require('postcss-reporter')({
          clearMessages: true
        })
      ];
    },
    target: "web",
    stats: false,
    progress: true
  }
}
