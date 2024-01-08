function a() {
  console.log("Hello " + this.name);
}

const miho = { name: "Miho" };
const b = a.bind(miho);
b();
