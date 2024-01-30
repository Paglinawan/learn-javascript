const items = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let i = 0;
  let _this = this; // オブジェクトのメソッドの場合thisの参照先は呼び出し元のオブジェクトになる
  return {
    next() {
      let key = keys[i];
      i++;
      return {
        value: [key, _this[key]],
        done: i > keys.length,
      };
    },
  };
};

// const items = Object.entries(obj);

for (const [k, v] of items) {
  console.log(k, v);
}
