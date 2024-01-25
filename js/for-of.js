const array = ["a", "b", "c"];

array[4] = "e"; // d undefined
Object.prototype.method = function () {};
Object.defineProperty(array, 0, {
  enumerable: false,
});

for (let value of array) {
  console.log(value);
}
