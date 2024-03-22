const hello = () => {
  console.log("Hello");
};

// 스케줄
const timeout = setTimeout(hello, 2000);
// ex1) 곧바로 종료
// clearTimeout 으로 인하여 timeout이 실행되지 않는다.
clearTimeout(timeout);

// ex2) h1 클릭으로 인해 종료
const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  console.log("Clear!");
  clearTimeout(timeout);
});
