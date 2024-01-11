let c = 0;
function fn() {
  let c = 1;
  const result = new Function("a", "b", "return a * b * c");
  return result;
}

const fnChild = fn();
console.log(fnChild(1, 2));
