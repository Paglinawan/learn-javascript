const array = [1, 2, 3, 4, 5];
const newArray = array.filter(function (v, i) {
  return i >= 1;
});
console.log(array, newArray);
