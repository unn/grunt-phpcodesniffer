"use strict";

module.exports = function (grunt) {

  var helpers = require("../src/phpcodesniffer").init(grunt);

  function writer(data) {
    if (!/^(\r\n|\n|\r)$/gm.test(data)) {
      this.write(data);
    }
  }

  grunt.registerMultiTask("phpcs", "Run PHP_CodeSniffer.", function () {
    var done = this.async(),
        phpcodesniffer;

    helpers.setTarget(this.target);

    phpcodesniffer = require("child_process").exec(helpers.buildCommand());
    phpcodesniffer.stdout.on("data", writer.bind(process.stdout));
    phpcodesniffer.stderr.on("data", writer.bind(process.stderr));
    phpcodesniffer.on("exit", function (code) {
      done(code === 0);
    });
  });
}
