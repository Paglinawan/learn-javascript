window.name = "Someone";
const person = {
  name: "Miho",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

person.hello(); // this -> 呼び出し元オブジェクト

function fn(ref) {
  ref();
} // this -> グローバルオブジェクト

fn(person.hello);
