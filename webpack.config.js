const path = require('path');
const webpack = require('webpack')
module.exports = [{
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    library: "@test",
    libraryTarget: 'commonjs2',
    filename: 'index.js',
  },
  entry: {
    main: './src/index.ts'
  },
  externals: {
    'react': 'react', // Case matters here 
    'react-dom' : 'reactDOM' // Case matters here 
  },
  plugins: [
    new webpack.ProvidePlugin({
           process: 'process/browser',
    }),
],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /\.stories\.ts(x?)$/],
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
}];
