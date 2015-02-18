"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var pluck = _interopRequire(require("./"));

var obj = {
  name: "fp-js"
};

var nums = [1, 2, 3];

it("fp-pluck", function () {
  assert.equal(pluck("name")(obj), "fp-js");
  assert.equal(pluck("length")(nums), 3);
});