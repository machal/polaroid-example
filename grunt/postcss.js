// PostCSS
// -------

// autoprefixer - pridani prefixu podle browserlist z package.json

'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        require('autoprefixer')({ grid: true })
      ]
    },
    src: 'dist/css/index.css',
    dest: 'dist/css/index.css'
  }

}; // module.exports
