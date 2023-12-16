class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj = new C(1, 2);

console.log("a" in obj);
console.log(Reflect.has(obj, "a"));
