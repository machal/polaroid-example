// Kopirovani souboru
// ------------------


'use strict';

module.exports = {

  fancybox_img: {
    files: [
      {
        expand: true,
        cwd: 'node_modules/fancybox/source/',
        src: ['*.gif','*.png'],
        dest: 'css/'
      }
    ]
  }

};
