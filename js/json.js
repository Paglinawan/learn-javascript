const obj = { a: 0, b: 1, c: 2 };

const json = JSON.stringify(obj, ["a", "b"]);
console.log(json);
