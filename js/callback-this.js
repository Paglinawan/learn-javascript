window.name = "Someone";
const person = {
  name: "Miho",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

person.hello();

function fn(ref) {
  ref();
}

fn(person.hello);
