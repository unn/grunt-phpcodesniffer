"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "src/**/*.js",
        "task/**/*.js",
        "bin/**/*.js"
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadTasks("tasks");

  grunt.registerTask("default", ["jshint"]);
};


/*    phpcs: {
      all: {
        files: ["test/*.js", "spec/*"],
        standard: "Drupal"
      }
    } */
