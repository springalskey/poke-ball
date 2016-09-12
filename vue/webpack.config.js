var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

// 环境
var isProd = process.env.NODE_ENV === 'production';
var cssLoader = isProd ? ExtractTextPlugin.extract('css') : 'style!css';
var scssLoader = isProd ? ExtractTextPlugin.extract('css!sass') : 'style!css!sass';

var config = {
  context: path.join(__dirname, './src'),
  entry: {
    app: './main.js',
    vendor: [
      'vue',
      'vue-router',
      'vue-resource',
      'element-ui',
      'vuex',
      'lodash',
      'moment'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash:7].js'
  },
  resolve: {
    extensions: [ '', '.vue' , '.js'],
    alias: {
      'src': path.join(__dirname, './src'),
      'scss': path.join(__dirname, './src/scss'),
      'components': path.join(__dirname, './src/components'),
      'constants': path.join(__dirname, './src/constants'),
      'directive': path.join(__dirname, './src/directive'),
      'filters': path.join(__dirname, './src/filters'),
      'resource': path.join(__dirname, './src/resource'),
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: cssLoader
    }, {
      test: /\.scss$/,
      loader: scssLoader
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpg|gif|svg|ico)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'assets/[name].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  vue: {
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    // 注入webpack运行的环境变量（是否为开发环境）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
    })
  ],
  devServer: {
    host: 'xy.dev.elenet.me',
    port: 8088,
    historyApiFallback: true,
    noInfo: true,
    proxy: {
      '/baseApi/webapi': {
        target: 'http://vpca-jaws-api-1.vm.elenet.me:8088',
      },
      '/mock': {
        target: 'http://localhost:9090'
      }
    },
    contentBase: './src'
  },
  devtool: '#eval-source-map'
};


// build production
if (isProd) {
  config.devtool = '#source-map';

  config.vue.loaders = {
    css: ExtractTextPlugin.extract('css'),
    sass: ExtractTextPlugin.extract('css!sass')
  };

  config.plugins.push(
    new ExtractTextPlugin('[name].[hash:7].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  );
}

module.exports = config;
