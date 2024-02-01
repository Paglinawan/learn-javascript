function* numbers(max = 3) {
  let i = 0;
  while (i < max) {
    yield i++;
  }
  return;
}

const result = numbers();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
