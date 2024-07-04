const numbers = [14, 20, 60, 120, 2, 0, 1];

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);
