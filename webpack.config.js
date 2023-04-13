const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js',
    publicPath: '/'
  },

  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
      }
    },
    historyApiFallback: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(mp4|gif)$/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}