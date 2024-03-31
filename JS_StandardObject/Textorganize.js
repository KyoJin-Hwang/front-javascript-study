const fruit = "Melon, Apple, Banana";

console.log(fruit.split(",")); // ['Melon', ' Apple', ' Banana']

console.log(fruit.split(",", 1)); // ['Melon']
console.log(fruit.split(",", 2)); // ['Melon', ' Apple']
console.log(fruit.split(",", 3)); // ['Melon', ' Apple', ' Banana']
