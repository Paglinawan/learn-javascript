function a() {
  console.log("Hello " + this.name);
}

const miho = { name: "Miho" };

a.bind(miho); // 実行されない
a.apply(miho);
a.call(miho);
