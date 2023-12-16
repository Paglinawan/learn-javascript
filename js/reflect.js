class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
console.log(obj1);
// ▼▼▼　//
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);
