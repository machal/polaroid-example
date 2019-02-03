'use strict';

module.exports = function (grunt) {

  // Zrychleni behu a nacteni tasku
  require('jit-grunt')(grunt);

  // Merime rychlost behu uloh
  require('time-grunt')(grunt);

  // Jednotlive tasky a jejich konfigurace
  grunt.initConfig({

    copy: {
      jquery_js: {
        files: [
          {
            src: 'node_modules/jquery/dist/jquery.js',
            dest: 'src/js/jquery.js'
          }
        ]
      },
      fancybox_js: {
        files: [
          {
            src: 'node_modules/fancybox/dist/js/jquery.fancybox.js',
            dest: 'src/js/jquery.fancybox.js'
          }
        ]
      },
      fancybox_img: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/fancybox/dist/img/',
            src: ['*.gif','*.png'],
            dest: 'dist/img/'
          }
        ]
      },
    },

    less: {
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
    },

    postcss: {
      default: {
        options: {
          map: true,
          processors: [
            require('autoprefixer')({ grid: true })
          ]
        },
        src: 'dist/css/index.css',
        dest: 'dist/css/index.css'
      }
    },

    browserSync: {
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
    },

    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['css']
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['js']
      }
    }

  });

  // Aliasy pro tasky
  grunt.registerTask('css', ['less', 'postcss']);
  grunt.registerTask('default', ['copy', 'css', 'browserSync', 'watch']);
};
