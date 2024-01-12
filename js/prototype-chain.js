function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log("OwnProperty: Hello " + this.name); // 1
  };
}

Person.prototype.hello = function () {
  console.log("Person: Hello " + this.name); // 2
};

Object.prototype.hello = function () {
  console.log("Object: Hello " + this.name); // 3
};

const Miho = new Person("Miho", 29);
Miho.hello();
