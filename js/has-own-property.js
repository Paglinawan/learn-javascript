function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("Person: Hello " + this.name); // 2
};

const Miho = new Person("Miho", 29);
const result1 = Miho.hasOwnProperty("name");
const result2 = Miho.hasOwnProperty(Miho);
console.log(result1); // true
console.log(result2); // false
console.log("name" in Miho); // true
