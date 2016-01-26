/*

Ukoly nad assety
================

1) Kopirovani souboru
2) CSS: LESS, PostCSS
3) JS: minifikace
4) Workflow: BrowserSync, watch
5) Alias tasky: css, js, default

*/

module.exports = function(grunt) {
  "use strict";

  // zjistujeme cas behu tasku
  require('time-grunt')(grunt);

  // jit-grunt pro zrychleni nacitani gruntu a behu tasku
  require('jit-grunt')(grunt);


  // Nastaveni tasku
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // 1) Kopirovani souboru
    // ---------------------

    copy: {
      fancybox_js: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/fancybox/source/',
            src: ['jquery.fancybox.js'],
            dest: 'js/lib/fancybox/'
          }
        ]
      },
      fancybox_css: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/fancybox/source/',
            src: ['jquery.fancybox.css'],
            dest: 'less/lib/'
          }
        ]
      }, 
      fancybox_img: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/fancybox/source/',
            src: ['*.gif','*.png','*.css'],
            dest: 'css/'
          }
        ]
      },     
      jquery: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: ['jquery.js'],
            dest: 'js/lib/jquery/'
          }
        ]
      }      
    },

    // CSS
    // ---

    // LESS kompilace

    less: {
      default: {
        files: {
          'css/index.css': 'less/index.less'
        },
        options: {
          sourceMap: true,
          // sourceMapFilename:
          // Pokud nastaveno, zapise se SM do
          // externiho souboru. Uvadi se zde cesta k nemu.
          sourceMapFilename: 'css/index.css.map',
          // sourceMapURL:
          // Prepise vychozi url pro soubor se SM,
          // tak jak se vola na konci zkompilovaneho CSS souboru.
          // Vychozi je obsah `sourceMapFilename`, tady jde prepsat.
          sourceMapURL: 'index.css.map',
          // sourceMapRootpath:
          // Cesta k LESS souborum jek budou volany ze souboru se SM.
          sourceMapRootpath: '/',
          // Komprimovat timto? contrib-css odstranoval sourcemapy
          //compress: true,
        }
      }
    },


    // Javascript
    // ----------

    // Uglify: minifikace JS

    uglify: {
      default: {
        files: {
          'js/script.min.js': ['js/lib/jquery/jquery.js', 'js/lib/fancybox/jquery.fancybox.js', 'js/index.js']
        }
      }
    },

    // Workflow
    // --------

    // browserSync

    // Spusti server na http://localhost:3000/, externe pak na
    // adrese, kterou zobrazi pri startu.
    // Injectuje zmeny v bsFiles bez nutnosti reloadu.
    // Synchronizuje zobrazeni napric zarizenimi.

    browserSync: {
      dev: {
          bsFiles: {
              src : [
                'css/*.css'
              ]
          },
          options: {
              watchTask: true,
              proxy: 'localhost'
          }
      }
    },

    // watch
    // -----

    // Sleduje zmeny v LESS a JS souborech a spousti souvisejici tasky.

    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: ['css']
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['js']
      }
    },

  });


  // 5) Alias tasky
  // --------------

  grunt.registerTask('css', ['less']);
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('default', ['copy', 'css', 'js', 'browserSync', 'watch']);

};
