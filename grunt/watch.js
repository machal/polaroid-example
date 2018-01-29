// watch
// -----

// Sleduje zmeny v LESS a JS souborech a spousti souvisejici tasky.

'use strict';

module.exports = {

  less: {
    files: 'src/less/**/*.less',
    tasks: ['less']
  },
  js: {
    files: 'src/js/**/*.js',
    tasks: ['js']
  }

}; // module.exports
