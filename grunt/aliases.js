'use strict';

module.exports = {

  // grunt css
  less: [
    'less',
    'postcss:post'
  ],

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
