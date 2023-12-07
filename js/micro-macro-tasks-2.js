new Promise(function promise(resolve) {
  console.log("Promise"); // 1

  setTimeout(function task1() {
    console.log("Macro Tasks"); // 3
    resolve(); // Micro Task is waiting for resolve
  });
}).then(function job1() {
  console.log("Micro Tasks"); // 4
});

console.log("Global End"); // 2
