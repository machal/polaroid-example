// Kopirovani souboru
// ------------------


'use strict';

module.exports = {

  jquery_js: {
    files: [
      {
        src: 'node_modules/jquery/dist/jquery.js',
        dest: 'src/js/jquery.js'
      }
    ]
  },

  fancybox_js: {
    files: [
      {
        src: 'node_modules/fancybox/dist/js/jquery.fancybox.js',
        dest: 'src/js/jquery.fancybox.js'
      }
    ]
  },


  fancybox_img: {
    files: [
      {
        expand: true,
        cwd: 'node_modules/fancybox/dist/img/',
        src: ['*.gif','*.png'],
        dest: 'dist/img/'
      }
    ]
  },


};
