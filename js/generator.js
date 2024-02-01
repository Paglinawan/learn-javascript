function* numbers() {
  yield 1;
  yield 2;
  return 3;
}

const result = numbers();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
