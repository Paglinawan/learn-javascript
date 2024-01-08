function a() {
  console.log("Hello " + this.name);
}
const b = a.bind({ name: "Miho" });
b();
