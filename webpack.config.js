var path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, 'public', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  //loader preprocess files before bundling them
  //babel will convert all JSX and ES6 into plain javascript
  //before bundling
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /(node_modules|server.js)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=20000'
        //if an image is bigger than 20000kb
        //a direct url will be created for the
        //image asset
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
