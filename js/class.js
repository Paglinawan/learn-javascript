class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Hello " + this.name);
  }
}
const Miho = new Person("Miho", 29);
Miho.hello();
