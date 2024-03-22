const sum = (a, b, c) => {
  // setTimeout : 지연시켜주는 함수 (현재 여기서는 콜백으로 사용된다.)
  setTimeout(() => {
    // c 는 sum의 세번째 매개변수의 함수를 실행시킨다.
    c(a + b);
  }, 1000);
};

sum(1, 2, (value) => {
  console.log(value);
});
sum(3, 5, (value) => {
  console.log(value);
});
