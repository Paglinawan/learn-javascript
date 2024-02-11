function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log("Sleep Done");
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("Button Clicked");
});

setTimeout(function () {
  sleep(3000);
}, 2000);
