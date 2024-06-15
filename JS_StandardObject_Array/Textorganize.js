const arr = [1, 2, [3, 4]];
console.log(arr.flat()); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arr2.flat()); // [1, 2, 3, 4, Array(2)]
console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log(arr2.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8]
