const path = require('path');

module.exports = {
    module: {
        loaders: [
          {
            test: /isotope-layout/,
            loader: 'imports?define=>false&this=>window'
          }
        ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      alias: {
        'masonry': 'masonry-layout',
        'isotope': 'isotope-layout'
      }
    },
    devtool : 'inline-source-maps',
    externalsPresets: { node: true },
  };

  