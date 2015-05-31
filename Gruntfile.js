/*

Ukoly nad assety: kombilace CSS, JS, zmensovani IMG…
=====================================================

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

    // Rename
    // ======

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
    // ===

    // LESS kompilace
    // --------------

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

    // Autoprefixer
    // ------------

    // Automaticky pridava browser prefixy co vykompilovaneho CSS.

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9'],
        map: true // Updatni SourceMap
      },
      style: {
          src: 'css/index.css',
          dest: 'css/index.css'
      }
    },


    // CSSmin
    // ------

    // Minifikujeme inlinované CSSka.
    // Nepoužíváme na index.css, protože odstraňuje SourceMapy. Ale bylo
    // by to efektivnější než minifikovat LESSem.

    cssmin: {
      css: {
        files: {
          'css/index.min.css': 'css/index.css'
        }
      }
    },

    // Javascript
    // ==========

    // Uglify: minifikace JS
    // ---------------------

    uglify: {
      default: {
        files: {
          'js/script.min.js': ['js/lib/jquery/jquery.js', 'js/lib/fancybox/jquery.fancybox.js', 'js/index.js']
        }
      }
    },

    // 3) Obrazky
    // ==========

    // Imagemin: zmensovani datoveho objemu obrazku
    // --------------------------------------------

    imagemin: {
      // TODO
      default: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.jpg','**/*.png','**/*.gif'],
          dest: 'dist/img/'
        }]
      }
    },

    // SVG2PNG
    // -------
    // Z SVG obrazku dela PNG kopie pro fallbacky. TODO

    svg2png: {
      images: {
        files: [
            { cwd: 'dist/img/vector/', src: ['**/*.svg'] }
        ]
      }
    },

    // 4) browserSync a watch
    // ======================

    // browserSync
    // -----------

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
              proxy: 'sites.localhost'
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
  // ==============

  grunt.registerTask('css', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('img', ['imagemin', 'svg2png']);
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('default', ['copy', 'css', 'js', 'browserSync', 'watch']);

};
