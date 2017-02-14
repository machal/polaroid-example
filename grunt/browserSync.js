// browserSync
// -----------

// Spusti server na http://localhost:3000/, externe pak na
// adrese, kterou zobrazi pri startu.
// Injectuje zmeny v bsFiles bez nutnosti reloadu.
// Synchronizuje zobrazeni napric zarizenimi.

'use strict';

module.exports = {

  dev: {
      bsFiles: {
          src : [
            'dist/css/*.css'
          ]
      },
      options: {
          watchTask: true,
          server: './'
      }
  }

}; // module.exports
