const obj = { apple: "りんご" };
const json = JSON.stringify(obj);

localStorage.setItem("Fruits", json);

const result = localStorage.getItem("Fruits");
const obj2 = JSON.parse(result);
console.log(obj2);
