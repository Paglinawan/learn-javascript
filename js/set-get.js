function Person(name, age) {
  this._name = name;
  this._age = age;
}

Object.defineProperty(Person.prototype, "name", {
  get: function () {
    return `Hello ${this._name}`;
  },
  set: function (val) {
    this._name = val;
  },
});

const miho = new Person("Miho", 29);
console.log(miho.name);
