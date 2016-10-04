// LESS -> CSS
// -----------


'use strict';

module.exports = {

    default: {
      files: {
        'css/index.css': 'less/index.less'
      },
      options: {
        sourceMap: true,
        sourceMapFilename: 'css/index.css.map',
        sourceMapURL: 'index.css.map',
        sourceMapRootpath: './'
      }
    }

}; // module.exports
