const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 环境
const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    app: './src/main.js',
    vendor: ['vue']
  },
  output: {
    publicPath: 'http://localhost:8088/',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:7].js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style!css"
      },
      {
        test: /\.useable\.css$/,
        loader: "style/useable!css"
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  vue: {
    // postcss: [require('postcss-cssnext')()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devServer: {
    port: 8088,
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}


// build production
if (isProd) {
  const ExtractTextPlugin = require("extract-text-webpack-plugin")

  config.devtool = '#source-map'

  config.vue.loaders = {
    css: ExtractTextPlugin.extract('css'),
    sass: ExtractTextPlugin.extract(['css', 'sass'])
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
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
  )
}

module.exports = config;
