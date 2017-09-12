// PostCSS
// -------

'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        require("postcss-easy-import")({
              plugins: [
                require("stylelint") // Kontrola jeste pred upravami
              ]
            }),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('autoprefixer'),
        require('pixrem')
      ]
    },
    src: 'src/css/index.css',
    dest: 'dist/css/index.css'
  },

  post: {
    options: {
      map: true,
      processors: [
        require('pixrem')({rootValue: 16}), // rem -> px fallback
        require('autoprefixer')({browsers: 'last 2 versions'}), // pridani prefixu
      ]
    },
    src: 'dist/css/index.css',
    dest: 'dist/css/index.css'
  },

  stylelint: {
    options: {
      map: true,
      processors: [
        require('stylelint')
      ]
    },
    src: 'dist/css/index.css',
    dest: 'dist/css/index.css'
  }

}; // module.exports
