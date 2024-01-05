let a = "Hello";
let b = a;
b = "Bye";
console.log(a, b);

let c = {
  prop: "Hello",
};

let d = c;
d.prop = "Bye";
console.log(c, d);
