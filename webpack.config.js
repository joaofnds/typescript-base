const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'out')
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [new TsConfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
