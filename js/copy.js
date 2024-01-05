let a = {
  prop: 0,
};

function fn1(arg1) {
  arg1.prop = 1;
  console.log(a, arg1);
}
fn1(a);

// -> オブジェクトを関数の引数として渡す場合にはオブジェクトへの参照がコピーされている

function fn2(arg2) {
  arg2 = {};
  console.log(a, arg2);
}
fn2(a);
