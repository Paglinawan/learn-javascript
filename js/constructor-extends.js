function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("Hello " + this.name);
};

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

const Miho = new Japanese("Miho", 29);
Miho.hello();
