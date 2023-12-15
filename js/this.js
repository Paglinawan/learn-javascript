const person = {
  name: "Miho",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

person.hello();
