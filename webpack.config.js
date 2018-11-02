const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebPackPlugin({
  template: `${__dirname}/index.html`,
  filename: './index.html',
  inject: 'body',
})


module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // 任意的 404 响应都替代为 index.html
    hot: true, // 启用 webpack 的模块热替换特性
    inline: true, // 启用内联模式
    port: 8008,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
