function a(message = "") {
  console.log("Hello " + this.name + message);
}

const miho = { name: "Miho" };

a.bind(miho); // 実行されない
a.apply(miho);
a.call(miho, " How are you?"); // 引数を設定できる
