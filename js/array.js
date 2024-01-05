const array = [1, 2, 3, 4, 5];
const newArray = array.map(function (v, i, arry) {
  return v * 10;
});
console.log(array, newArray);
