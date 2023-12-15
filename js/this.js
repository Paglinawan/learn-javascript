window.name = "Someone";
const person = {
  name: "Miho",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

const ref = person.hello;
ref();
