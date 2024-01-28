const set = new Set();

const key = {};
const method = function () {};
set.add(key);
set.add(method);

// for (let key of set) {
//   console.log(key);
// }

const array = Array.from(set);
console.log(array);
