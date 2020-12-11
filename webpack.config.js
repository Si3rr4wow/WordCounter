const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /.worker.js/],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      reducers: path.resolve(__dirname, './src/reducers')
    }
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })]
}
