class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello(person) {
    //　 ↑ constructor(judy.name, judy.age)
    console.log(`${this.name} says hello ${person.name}`);
  }
  shakeHands(person) {
    console.log(`${this.name} shake hands with ${person.name}`);
  }
  bye(person) {
    console.log(`Good bye ${person.name}.`);
  }
}

const miho = new Person("Miho", 29);
const judy = new Person("Judy", 36);
miho.hello(judy);
miho.shakeHands(judy);
miho.bye(judy);
