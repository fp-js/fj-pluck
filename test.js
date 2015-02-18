"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var pluck = _interopRequire(require("./"));

var obj = {
  name: "fj-js"
};

var nums = [1, 2, 3];

it("fj-pluck", function () {
  assert.equal(pluck("name")(obj), "fj-js");
  assert.equal(pluck("length")(nums), 3);
});