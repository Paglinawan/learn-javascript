const btn = document.querySelector("button");

btn.addEventListener("click", function task2() {
  console.log("task2 done"); // -> Task queue 1 -> call stack 3 after a()
});

function a() {
  setTimeout(function task1() {
    console.log("task1 done");
  }, 4000); // -> Task queue 2 after 4000ms -> call stack 4 after a()

  const startTime = new Date();
  while (new Date() - startTime < 2000);
  console.log("fn done"); // -> Done after 2000ms a()
}
a(); // -> call stack 2 (global 1)
