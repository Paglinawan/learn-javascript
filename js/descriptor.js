"use strict";
const obj = {};
Object.defineProperty(obj, "prop", {
  value: 0,
  configurable: true,
});

delete obj.prop;
console.log(obj.prop);
