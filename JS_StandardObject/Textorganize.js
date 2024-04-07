console.log(Math.random()); // 0.0919170172899968

// 1. 0 ~ 10을 포함한 정수 난수 얻는 함수
function random1() {
  return Math.floor(Math.random() * 10) + 1;
}

// 2. 특정 범위의 랜덤 정수를 얻는 함수
function random2(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 1부터 10까지
console.log(random1());

// 0부터 10까지
console.log(random2());
// 1부터 20까지
console.log(random2(11, 20));
// 101부터 999까지
console.log(random2(101, 999));
