// Viz adresar `grunt/`, kde jsou konfigurace jednotlivych uloh

'use strict';

module.exports = function (grunt) {

  // Nacteme konfigurak
  var options = {
    pkg: grunt.file.readJSON('package.json')
  };

  // Merime rychlost behu uloh
  require('time-grunt')(grunt);

  // Nacteme ulohy z adresare grunt/
  // a pomoci jitGrunt je zrychlime
  require('load-grunt-config')(grunt, {
    config: options,
    jitGrunt: true
  });

};
