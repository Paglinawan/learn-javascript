function Constructor(a, b) {
  this.a = a;
  this.b = b;
  // return {};
}

Object.prototype.c = function () {};

function newFn(C, ...args) {
  const _this = Object.create(Constructor.prototype);
  const result = C.apply(_this, args);
  return _this;
}

const instance = newFn(Constructor, 1, 2);
console.log(instance);
