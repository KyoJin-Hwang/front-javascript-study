const str = "Hello, Hello?!";

console.log(str.replace("Hello", "Hi")); // Hi, Hello?!
console.log(str.replace(/Hello/g, "Hi")); // Hi, Hi?!
console.log(str); // Hello, Hello?!
