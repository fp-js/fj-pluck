"use strict";

module.exports = function (name) {
  return function (object) {
    return object[name];
  };
};