const date = new Date();

console.log(date.getMinutes()); // 58
console.log(date);
// Fri Apr 19 2024 13:58:04 GMT+0900 (대한민국 표준시)

date.setMinutes(5);

console.log(date.getMinutes()); // 5
console.log(date);
// Fri Apr 19 2024 13:05:04 GMT+0900 (대한민국 표준시)
