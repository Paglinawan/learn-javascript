function* numbers(max = 3) {
  let i = 0;
  while (i < max) {
    yield i++;
  }
  return;
}

for (const iterator of numbers()) {
  console.log(iterator);
}
