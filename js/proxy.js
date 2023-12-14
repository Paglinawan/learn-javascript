const obj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;

    return true; // Proxy オブジェクトで setハンドラを使用している場合、set メソッド内で必ず true を返す必要がある
  },

  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    return target[prop];
  },

  delete: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
};
const pxy = new Proxy(obj, handler);
pxy.a = 1; // set
pxy.a; // get
delete pxy.a; // delete
console.log(obj);
