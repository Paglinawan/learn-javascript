class Person {
  constructor(name) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Hello " + this.name);
  }
}
// ↑ Syntax Sugar
// function Person(name) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function () {
//   console.log("Hello " + this.name);
// };
