setTimeout(function task1() {
  console.log("Macro Tasks"); // 4
});

new Promise(function promise(resolve) {
  console.log("Promise"); // 1
  resolve();
}).then(function job1() {
  console.log("Micro Tasks"); // 3
});

console.log("Global End"); // 2
