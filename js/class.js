class Person {
  // フィールド（プロパティの一覧）
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Hello " + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }

  hello() {
    super.hello(); // from Person Class -> "Hello Miho"
    console.log("こんにちは " + this.name + "（" + this.gender + "）");
  }
}

const Miho = new Japanese("Miho", 29, "女性");
Miho.hello();
