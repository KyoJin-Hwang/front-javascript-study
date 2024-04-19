const date = new Date();

console.log(date.getHours()); // 13
console.log(date);
// Fri Apr 19 2024 13:55:46 GMT+0900 (대한민국 표준시)

date.setHours(7);

console.log(date.getHours()); // 7
console.log(date);
// Fri Apr 19 2024 07:55:46 GMT+0900 (대한민국 표준시)
