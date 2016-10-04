// Uglify: minifikace JS
// ---------------------

'use strict';

module.exports = {

  default: {
    files: {
      'js/script.min.js': [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery-fancybox/source/js/jquery.fancybox.js',
        'js/index.js'
      ]
    }
  }

}; // module.exports
