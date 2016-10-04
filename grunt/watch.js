// watch
// -----

// Sleduje zmeny v LESS a JS souborech a spousti souvisejici tasky.

'use strict';

module.exports = {

  less: {
    files: 'less/**/*.less',
    tasks: ['css']
  },
  js: {
    files: 'js/**/*.js',
    tasks: ['js']
  }

}; // module.exports
