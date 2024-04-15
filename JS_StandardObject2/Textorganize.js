const date = new Date();

console.log(date.getMonth() + 1);
// 4
console.log(date);
// Mon Apr 15 2024 22:57:36 GMT+0900 (대한민국 표준시)

date.setMonth(5);
console.log(date.getMonth());
// 5
console.log(date);
// Sat Jun 15 2024 23:01:10 GMT+0900 (대한민국 표준시)
