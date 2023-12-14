const obj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    throw new Error("cannot add prop");
  },

  get: function (target, prop, receiver) {
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return "-1";
    }
  },

  delete: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
};
const pxy = new Proxy(obj, handler);
pxy.a = 1;
console.log(pxy.b);
