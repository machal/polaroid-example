// Uglify: minifikace JS
// ---------------------

'use strict';

module.exports = {

  default: {
    files: {
      'dist/js/script.min.js': [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/fancybox/dist/js/jquery.fancybox.js',
        'src/js/index.js'
      ]
    }
  }

}; // module.exports
