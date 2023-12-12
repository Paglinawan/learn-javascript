const module = (function () {
  console.log("IIFE called");

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log("publicFn called: " + publicVal);
  }
  function privateFn() {}

  return {
    publicFn,
    publicVal, // primitive type
  };
})();

module.publicFn();
module.publicFn();
console.log(module.publicVal++);
console.log(module.publicVal++);
module.publicFn();
