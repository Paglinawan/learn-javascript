// 指定した時間後に一度だけ処理を実行する

// setTimeout(() => {
//   console.log("How are you?");
// }, 3000);

// console.log("Hello!");

// ブラウザに負荷をかけずに繰り返し実行できる
let count = 3;
function showClock() {
  const timeoutId = setTimeout(() => {
    console.log(new Date());
    count--;
    if (count < 0) return;
    // 再帰関数
    showClock();
  }, 1000);
}
showClock();
