const test = { 0: "A", 1: "B", 2: "C", length: 3 };
Array.from(test).forEach((item) => console.log(item));
// A B C

const arr1 = Array.from({ length: 5 }, (v, i) => i);
console.log(arr1); // [ 0, 1, 2, 3, 4 ]

const arr2 = [1, 2, 3];
console.log(Array.from(arr2, (x) => x + x)); // [ 2, 4, 6]
