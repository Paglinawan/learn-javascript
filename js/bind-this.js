window.name = "Someone";
const person = {
  name: "Miho",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

person.hello();

const helloJudy = person.hello.bind({ name: "Judy" });

function fn(ref) {
  ref();
}

fn(helloJudy);
