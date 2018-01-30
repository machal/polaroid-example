'use strict';

module.exports = {

  // grunt css
  css: [
    'less',
    'postcss'
  ],

  // grunt
  default: [
    'copy',
    'css',
    'browserSync',
    'watch'
  ],

}; // module.exports
