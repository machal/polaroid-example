'use strict';

module.exports = function (grunt) {

  var options = {

    // External configs
    pkg: grunt.file.readJSON('package.json')

  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    config: options,
    jitGrunt: true
  });

  // See the `grunt/` directory for individual task configurations.
};
