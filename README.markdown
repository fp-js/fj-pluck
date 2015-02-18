# fp-pluck

[![Build Status](https://travis-ci.org/fp-js/fp-pluck.svg)](https://travis-ci.org/fp-js/fp-pluck) [![npm version](https://badge.fury.io/js/fp-pluck.svg)](http://badge.fury.io/js/fp-pluck)

> Plucks a property from the given object.

## Installation

`npm install fp-pluck_NAME --save`

## Usage

```js
var pluck = require('pluck');

const obj = {
  name : 'fp-js'
}

pluck('name')(obj); // 'fp-js'
```
