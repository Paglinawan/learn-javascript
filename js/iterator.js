function genIterator(max = 10) {
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

// let sample = result.next();
// while (!sample.done) {
//   console.log(sample.value);
//   sample = result.next();
// }

const obj = {
  [Symbol.iterator]: genIterator.bind(null, 20),
};

// for (const iterator of obj) {
//   console.log(iterator);
// }

const s = new Set(obj);
console.log(s);
