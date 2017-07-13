var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var server = require('./server.js');
var api = require('./api.config.js');

var os = require('os');
var UglifyJsParallelPlugin = require('webpack-uglify-parallel');

//console.log( api )

var debug = process.env.NODE_ENV;

var entries = getEntry('./static/js/*js',"static/js");
entries.vendor = ['rem','jquery'];

var chunks = Object.keys(entries);

var config = {
  watch:true,
  entry:entries,
  output: {
    publicPath:'./',
    path: path.join(__dirname, '/app/'),
    filename: debug=='build'?'js/[name].js':'js/[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue':'vue/dist/vue.min',
      'md5':'md5/md5',
      'vue-router':'vue-router/dist/vue-router.min',
      'jquery':'jquery/dist/jquery.min',
      'rem':'./static/libs/rem.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'js': 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
            'less': 'vue-style-loader!css-loader!less-loader'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader:debug=='build'?"style-loader!css-loader!less-loader":ExtractTextPlugin.extract({
          fallbackLoader:'style-loader',
          loader: ['css-loader','less-loader','postcss-loader'],
          publicPath:"../"
        }),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:debug=='build'?"style-loader!css-loader":ExtractTextPlugin.extract({
          fallbackLoader:'style-loader',
          loader: ['css-loader','less-loader','postcss-loader'],
        }),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader:debug=="build"?'url-loader?limit=1000&name=image/[name].[ext]':'url-loader?limit=1000&name=image/[name].[hash:8].[ext]',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
      debug=="build" ? function(){} : new CopyWebpackPlugin([{
          from: __dirname + '/app/',
          to:__dirname+"/release/"+debug+"_H5",
          force: true
      }],{
          copyUnmodified: true
      }),
      new webpack.ProvidePlugin({ //这是把jquery挂到全局上，不用每个模块都去require
          "$": 'jquery',
          "jQuery": 'jquery'
      }),
      //new webpack.HotModuleReplacementPlugin(), //热加载插件
      new ExtractTextPlugin({
        filename:debug=="build"?"css/[name].css":"css/[name].[chunkhash:8].css",
        allChunks: true
      }),
      debug=='build' ? function() {} : new UglifyJsParallelPlugin({
          workers: os.cpus().length,
          mangle: true,
          compressor: {
              warnings: false,
              drop_console: false,
              drop_debugger: true
          }
      }),
      debug=="build" ? function(){} : new CleanPlugin(["app/js","app/css","app/image","release/"+debug+"_H5/css","release/"+debug+"_H5/js","release/"+debug+"_H5/image"],{
          "root":path.resolve(__dirname),
          "dry": false,
          "exclude": ["libs","ocr","reset.css"]
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function (module) {
             return module.context && module.context.indexOf('node_modules') !== -1;
          }
      }),
      new webpack.optimize.CommonsChunkPlugin({ 
          name: 'manifest'
      })
      // new webpack.DefinePlugin({
      //     'process.ENV': JSON.stringify(ENV)
      // })
  ],
  performance: {
    hints: false
  },

}

module.exports = config;

var pages = Object.keys(getEntry('static/view/*.html', 'static/view'));
pages.forEach(function(pathname) {
    var conf = {
        filename: pathname + '.html', //生成的html存放路径，相对于path
        template: 'html-withimg-loader!'+'static/view/' + pathname + '.html', //html模板路径
        inject: 'body',    //js插入的位置，true/'head'/'body'/false
        //cache:true,
        excludeChunks: ['dev-helper']
    };
    if (pathname in config.entry) {
        conf.chunks = ["manifest","vendor",pathname];
    }
    config.plugins.push(new HtmlWebpackPlugin(conf));
});

function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {

        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        pathname = (pathDir?pathname.replace(new RegExp('^' + pathDir), ''): pathname).slice(1); //修改了取值；
        entries[pathname] = './' + entry;

    }
    return entries;
}

//开启服务
config.devServer = server;
