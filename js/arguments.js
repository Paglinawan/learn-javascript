function fn() {
  const a = arguments[0];
  const b = arguments[1];

  console.log(arguments);
  console.log(`a: ${a} / b: ${b}`);
}

fn(1, 10);
