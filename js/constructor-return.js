function Object(a, b) {
  this.a = a;
  this.b = b;
  return {};
}
function NotObject(a, b) {
  this.a = a;
  this.b = b;
  // return 10;
}

Object.prototype.c = function () {};
NotObject.prototype.c = function () {};

const instance1 = new Object(1, 2);
const instance2 = new NotObject(1, 2);
console.log(instance1);
console.log(instance2);
