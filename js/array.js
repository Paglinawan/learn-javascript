const array = [1, 2, 3, 4, 5];
const newArray = array.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 0);
console.log(newArray);
