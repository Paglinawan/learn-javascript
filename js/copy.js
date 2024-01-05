let a = 0;

function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}
fn1(a);

let arg1 = a;
arg1 = 1;
console.log(a, arg1);

// -> プリミティブ型を関数の引数として渡す場合には値はそれぞれ独立しているので互いに影響を受けない
