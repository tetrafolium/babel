"use strict";
"use exports { baz, qux }";

exports.qux = exports.baz = void 0;
const {
  foo: {
    bar: [baz, qux]
  }
} = {};
exports.qux = qux;
exports.baz = baz;