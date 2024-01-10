function Constructor(a, b) {
  this.a = a;
  this.b = b;
  return {};
}

Object.prototype.c = function () {};

function newFn(C, ...args) {
  console.log(args); // [1, 2]
}

const instance = newFn(Constructor, 1, 2);
console.log(instance);
