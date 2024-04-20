const time = new Date().getTime();
console.log(Date.now()); // 1713623549122
console.log(time); // 1713623549122

// 1초이후
setTimeout(() => {
  console.log(Date.now()); // 1713623550139
  console.log(time); // 1713623549122
}, 1000);
