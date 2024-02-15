new Promise(function (resolve, reject) {
  console.log("Promise");
  resolve(0);
})
  .then(function (num) {
    console.log(`then: ${num++}`);
    return num;
  })
  .then(function (num) {
    console.log(`then: ${num++}`);
    throw new Error();
    return num;
  })
  .then(function (num) {
    console.log(`then: ${num++}`);
  })
  .catch(function () {
    console.log("Catch");
  });

console.log("Global End");
