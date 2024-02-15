new Promise(function (resolve) {
  console.log("Promise");
  resolve(0);
})
  .then(function (num) {
    console.log(`then: ${num++}`);
    return num;
  })
  .then(function (num) {
    console.log(`then: ${num++}`);
    return num;
  })
  .then(function (num) {
    console.log(`then: ${num++}`);
  });

console.log("Global End");
