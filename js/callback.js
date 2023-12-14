function hello(name) {
  console.log("Hello " + name);
}
function bye() {
  console.log("Bye");
}

function fn(callback) {
  callback("Miho");
}

fn(hello);
fn(bye);
