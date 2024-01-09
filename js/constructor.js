function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("Hello " + this.name);
};

const Miho = new Person("Miho", 29);
Miho.hello();
