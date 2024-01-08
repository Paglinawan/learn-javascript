function a(message1, message2) {
  console.log("Hello " + this.name + message1 + message2);
}

const miho = { name: "Miho" };

// a.bind(miho); // 実行されない
a.apply(miho, [" How are you?", " How's your work?"]);
// a.call(miho, " How are you?"); // 引数を設定できる
