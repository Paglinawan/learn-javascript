const s = Symbol();
const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  [s]: "value4",
};

for (let key in obj) {
  console.log(key, obj[key]);
}
