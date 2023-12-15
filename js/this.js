window.name = "Someone";
const person = {
  name: "Miho",
  hello: function () {
    a();
  },
};

function a() {
  console.log("Hello " + this.name);
}

person.hello();
