# fj-pluck

[![Build Status](https://travis-ci.org/fp-js/fj-pluck.svg?branch=master)](https://travis-ci.org/fp-js/fj-pluck) [![npm version](https://badge.fury.io/js/fj-pluck.svg)](http://badge.fury.io/js/fj-pluck)

> Plucks a property from the given object.

## Installation

`npm install fj-pluck --save`

## Usage

```js
var pluck = require('pluck');

const obj = {
  name : 'fj-js'
}

pluck('name')(obj); // 'fj-js'

pluck('name',obj) // 'fj-js'
```
