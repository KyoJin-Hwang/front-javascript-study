const arr = [5, 8, 130, 12, 44];
const foundItem = arr.findIndex((item) => item > 10);

console.log(foundItem); // 130

const users = [
  { name: "kyo", age: 20 },
  { name: "owen", age: 25 },
  { name: "hwang", age: 23 },
];

const foundUser = users.findIndex((user) => user.age > 22);
console.log(foundUser); // { name: 'owen', age: 25 }
