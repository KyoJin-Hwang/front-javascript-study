const fruits = ["Apple", "Banana", "Melon"];
console.log(fruits.includes("Apple")); // true
console.log(fruits.includes("apple")); // false

const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // true
console.log(numbers.includes(7)); // false

const obj = [
  { key: 1, name: "Kyo" },
  { key: 2, name: "Jin" },
  { key: 3, name: "Owen" },
];

console.log(obj.includes({ key: 1, name: "Kyo" })); // false

const kyo = obj[0];

console.log(obj.includes(kyo)); // true
