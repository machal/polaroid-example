// LESS -> CSS
// -----------


'use strict';

module.exports = {

    default: {
      files: {
        'dist/css/index.css': 'src/less/index.less'
      },
      options: {
        sourceMap: true,
        sourceMapFilename: 'dist/css/index.css.map',
        sourceMapURL: 'index.css.map',
        sourceMapRootpath: './'
      }
    }

}; // module.exports
