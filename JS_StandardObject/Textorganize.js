const str = "1234567";
const str2 = "1234567890123";

// 문자 길이가 10개 될때까지 0으로 채운다
console.log(str.padStart(10, "0")); // 0001234567

// 초과하면 원래값 유지
console.log(str2.padStart(10, "0")); // 1234567890123
