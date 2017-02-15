'use strict';

module.exports = {

  // grunt less
  less: [
    'less',
    'postcss:post'
  ],

  // grunt css
  css: [
    'postcss:default'
  ],

  // grunt js
  js: [
    'uglify'
  ],

  // grunt
  default: [
    'copy',
    'css',
    'js',
    'browserSync',
    'watch'
  ],

}; // module.exports
