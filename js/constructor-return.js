function Constructor(a, b) {
  this.a = a;
  this.b = b;
  // return {};
}

Object.prototype.c = function () {};

function newFn(C, ...args) {
  const _this = Object.create(Constructor.prototype);
  const result = C.apply(_this, args); // apply( {} , [ 1, 2 ] )
  console.log(_this);
  // -> 関数の引数としてオブジェクトを渡した場合,そのオブジェクトの参照を渡すので,実引数側のオブジェクトに影響が出る
}

const instance = newFn(Constructor, 1, 2);
console.log(instance);
