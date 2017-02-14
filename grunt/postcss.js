// PostCSS
// -------

'use strict';

module.exports = {

  options: {
    map: true,
    processors: [
      require('pixrem')({rootValue: 16}), // rem -> px fallback
      require('autoprefixer')({browsers: 'last 2 versions'}), // pridani prefixu
    ]
  },
  dist: {
    src: 'dist/css/index.css'
  }

}; // module.exports
