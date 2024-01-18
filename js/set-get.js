class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return `Hello ${this._name}`;
  }
  set name(val) {
    this._name = val;
  }
}

const miho = new Person("Miho", 29);
console.log(miho.name);
