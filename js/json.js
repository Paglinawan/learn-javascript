const obj = { a: 0, b: 1, c: 2 };
const json = JSON.stringify(obj, ["a", "b"]);

const obj2 = JSON.parse(json);
console.log(obj2);
