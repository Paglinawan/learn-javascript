// const array = [1, 2, 3, 4, 5];
// const newArray = [...array];
// console.log(newArray);
// console.log(array === newArray);

function sum(...args) {
  let ret = 0;
  for (const v of args) {
    ret += v;
  }
  return ret;
}

const result = sum(1, 2, 3, 4);
console.log(result);
