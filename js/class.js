class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Hello " + this.name);
  }
}

class Japanese extends Person {}

const Miho = new Japanese("Miho", 29);
Miho.hello();
