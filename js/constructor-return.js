function Constructor(a, b) {
  this.a = a;
  this.b = b;
  // return {};
}

Object.prototype.c = function () {};

function newFn(C, ...args) {
  const _this = Object.create(Constructor.prototype); // __proto__に格納される空のオブジェクト
  console.log(_this);
}

const instance = newFn(Constructor, 1, 2);
console.log(instance);
