"use strict";

var curry2 = require("fj-curry").curry2;
module.exports = curry2(function (name, object) {
  return object[name];
});