window.name = "Someone";
const person = {
  name: "Miho",
  hello: function (name) {
    console.log("Hello " + name);
  },
};

// person.hello();

const helloJudy = person.hello.bind(null, "Miho");

function fn(ref) {
  ref();
}

fn(helloJudy);
