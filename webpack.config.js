module.exports = {
  entry: "./public/App.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  //loader preprocess files before bundling them
  //babel will convert all JSX into javascript before
  //bundling
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel-loader',
        query: { presets: ['react', 'es2015']}
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
