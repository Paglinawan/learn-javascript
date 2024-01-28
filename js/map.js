const map = new Map();
// console.log(map);

const key = {}; // オブジェクトの場合
map.set(key, "SampleValue");
// console.log(map.get(key));

const method = function () {}; // 関数の場合
map.set(method, "SampleFunction");
// console.log(map.get(method));

const primitive = 5; // プリミティブ型の場合
map.set(primitive, "SamplePrimitive");
// console.log(map.get(5)); //  値に置き換えても取得できる
// console.log(map.get(primitive));

map.delete(method);
console.log(map);
