function Constructor(a, b) {
  this.a = a;
  this.b = b;
}

const instance = new Constructor(1, 2);
console.log(instance instanceof Constructor);
