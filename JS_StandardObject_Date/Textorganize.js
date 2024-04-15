const date = new Date();

console.log(date.getDate());
// 15
console.log(date);
// Mon Apr 15 2024 23:04:29 GMT+0900 (대한민국 표준시)

date.setDate(11);
console.log(date.getDate());
// 11
console.log(date);
// Thu Apr 11 2024 23:04:29 GMT+0900 (대한민국 표준시)
