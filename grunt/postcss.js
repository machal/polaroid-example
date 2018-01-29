// PostCSS
// -------

'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // pridani prefixu
      ]
    },
    src: 'dist/css/index.css',
    dest: 'dist/css/index.css'
  }

}; // module.exports
