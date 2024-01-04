window.name = "Someone";
const person = {
  name: "Miho",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

person.hello();

const helloMiho = person.hello.bind(person);

function fn(ref) {
  ref();
}

fn(helloMiho);
