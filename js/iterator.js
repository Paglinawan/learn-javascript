function genIterator(max) {
  let i = 0;

  return {
    next: function () {
      if (i > max) {
        return {
          done: true,
        };
      } else {
        return {
          done: false,
          value: i++,
        };
      }
    },
  };
}

const result = genIterator(10);

let sample = result.next();
while (!sample.done) {
  console.log(sample.value);
  sample = result.next();
}
