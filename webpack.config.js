const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: "./js/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'bundle'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ]
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['./'] ,
        files: ['index.html', 'bundle/app.js'],
    }
    }),

  ],
};
