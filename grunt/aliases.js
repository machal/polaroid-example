'use strict';

module.exports = {

  // grunt css
  css: [
    'less',
    'postcss:post'
  ],

  // grunt stylelint
  stylelint: [
    'postcss:stylelint'
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
