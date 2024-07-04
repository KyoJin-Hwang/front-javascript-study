// 예제1
const numbers = [14, 20, 60, 120, 2, 0, 1];

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
// 오름차순 정렬
console.log(numbers);
// [0, 1, 2, 14, 20, 60, 120];

numbers.sort((a, b) => b - a);
// 내림차순 정렬
console.log(numbers);
// [120, 60, 20, 14, 2, 1, 0];

// 예제2
const users = [
  { name: "kyo", age: 25 },
  { name: "owen", age: 65 },
  { name: "jin", age: 48 },
  { name: "eban", age: 38 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// [
//   { name: "kyo", age: 25 },
//   { name: "eban", age: 38 },
//   { name: "jin", age: 48 },
//   { name: "owen", age: 65 },
// ];
