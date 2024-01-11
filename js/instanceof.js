function Constructor(a, b) {
  this.a = a;
  this.b = b;
  const result = new Object();
  result.a = 1;
  return result;
}

const instance = new Constructor(1, 2);
console.log(instance.__proto__ === Constructor.prototype); // false
