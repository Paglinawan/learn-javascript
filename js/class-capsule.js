class User {
  name;
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
}

const user = new User("Miho", 32);
// クラスの外からのアクセスを制限する
user.#age = 29;
console.log(user.age);
