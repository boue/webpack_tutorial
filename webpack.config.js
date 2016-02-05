module.exports = {
  //all files that sit at top of our dependency tree for entry point
  entry: './src',
  output: {
    //compile the bundle in builds directory and call it bundle.js
    path: 'builds',
    filename: 'bundle.js',
    publicPath: 'builds/',
  },
  module: {
    loaders: [
      {
          test:    /\.js/,
          loader:  'babel-loader',
          include: __dirname + '/src',
      },
      {
          test:   /\.scss/,
          loader: 'style!css!sass',
      },
      {
          test:   /\.html/,
          loader: 'html',
      }
    ],
  }
};