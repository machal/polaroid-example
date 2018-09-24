'use strict';

// nastavení
var settings = {
  css: {
    source: 'src/less/index.less',
    target: 'dist/css/',
    filename: 'index.css',
    watch: ['src/less/**/*.less'],
  }
};

// gulp
var gulp = require('gulp');
// plumber - odchycení chybových hlášek
var plumber = require('gulp-plumber');
// sourcemaps - generování map zdrojů
var sourcemaps = require('gulp-sourcemaps');
// BrowserSync - live realod, server, ovládání prohlížeče
var browsersync = require('browser-sync');
// LESS - generování CSS z preprocesoru
var less = require('gulp-less');
// postCSS - postprocessing CSS (minifikace, autoprefixer...)
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// prejmenovani souboru
var rename = require('gulp-rename');


// postCSS pluginy a nastavení
var postcssPlugins = [
    autoprefixer()
];

// výpis chybových hlášek
var onError = function (err) {
  console.log(err);
  this.emit('end');
};

// nastavení BrowserSync
gulp.task('browser-sync', function() {
  browsersync({
    server: './'
  });
});

// BrowserSync live-reload
gulp.task('browsersync-reload', function () {
    browsersync.reload();
});

// SASS kompilace
gulp.task('less', function() {
  return gulp.src(settings.css.source)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest(settings.css.target))
    .pipe(browsersync.reload({ stream: true }));
});

// sledování změn souborů
gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(settings.css.watch, ['less']);
});

// aliasy tasků
// defaultni task
gulp.task('default', ['watch']);
