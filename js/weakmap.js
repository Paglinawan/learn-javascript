const wm = new WeakMap();

const obj = {};
wm.set(obj, "value");

console.log(wm.get(obj));
console.log(wm.has(obj));
console.log(wm.delete(obj));
console.log(wm.get(obj));
