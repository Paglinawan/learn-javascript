function genIterator(max) {
  let i = 0;

  return {
    next: function () {
      return {
        done: false,
        value: i++,
      };
    },
  };
}

const result = genIterator();

console.log(result.next());
console.log(result.next());
console.log(result.next());
