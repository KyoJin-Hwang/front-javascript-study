const arr = ["A", "B", "C"];

arr.forEach((item) => console.log(item));
// A -> B -> C // 한번씩 출력

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
  // A -> B -> C // 위와 동일
}
