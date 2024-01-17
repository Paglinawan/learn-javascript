const obj = {};
Object.defineProperty(obj, "prop", {
  value: 0,
});

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);
