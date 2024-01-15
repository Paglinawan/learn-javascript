const s1 = Symbol("hello");
const s2 = Symbol("hello");
console.log(typeof s1);
console.log(s1 === s2);

String.prototype[s1] = function () {
  return "Hello " + this;
};
String.prototype[s2] = function () {};

const str = new String("Miho");
console.log(str);

const miho = "Miho";
console.log(miho[s1]());
