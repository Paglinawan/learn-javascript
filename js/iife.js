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

const moduleParent = (function ({ publicFn: fn, publicVal: val }) {
  fn();
  fn();
  console.log(val++);
  console.log(val++);
  fn();
})(module);
