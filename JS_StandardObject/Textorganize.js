const str = "Hello world!";

// 값이 있는지 없는지
console.log(str.indexOf("Hello")); // 0
console.log(str.indexOf("Kyo")); // -1

// 몇번째부터 시작하고 있는지
console.log(str.indexOf("world")); // 6

// 조건문으로 사용하기
if (str.indexOf("Kyo") === -1) {
  console.log("Kyo 는 없습니다.");
}
