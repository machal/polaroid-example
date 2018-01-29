// Kopirovani souboru
// ------------------


'use strict';

module.exports = {

  fancybox_img: {
    files: [
      {
        expand: true,
        cwd: 'node_modules/fancybox/dist/img/',
        src: ['*.gif','*.png'],
        dest: 'dist/img/'
      }
    ]
  }

};
