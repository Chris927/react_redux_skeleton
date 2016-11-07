var HtmlWebpackPlugin = require('html-webpack-plugin')

var plugins = [
  new HtmlWebpackPlugin({
    title: 'SkateMap',
    template: './src/index.ejs'
  })
]
module.exports = {
  entry: './src',
  output: {
    filename: 'bundle-[hash].js',
    path: './dist',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      }
    ]
  }
}
