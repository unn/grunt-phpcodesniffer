"use strict";

exports.init  = function (grunt) {
  var configPrefix;

  function configKey(key) {
    return configPrefix.concat(key);
  }

  function setTarget(target) {
    configPrefix = ["phpcs", target];
  }

  function buildCommand() {
    return [
      "phpcs",
      getArgs("standard")
    ].filter(function (entry) {
        return entry !== null;
      }).join(" ");
  }

  function getArgs(arg) {
    if (grunt.config(configKey(arg)) === true) {
      return "--" + arg;
    }
    return null;
  }

  return {
    setTarget: setTarget,
    buildCommand: buildCommand
  };

};
