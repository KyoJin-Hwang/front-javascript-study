# JS 연산자와 구문

**by 황교진**

<span style="font-size:25px; background-color: rgb(255, 245, 177); color: black; font-weight:bold;">산술, 할당, 증감 연산자</span>

```javascript
// 산술(Arithmetic)
+ 더하기 , - 빼기  , * 곱하기 , / 나누기 , % 나머지

----------------------------------------------

// 할당(Assignment)
const a = 3
console.log(a)
// 3

----------------------------------------------
const a = 3
a = a + 2  // const 재할당 불가 ( error )

let a = 3
a = a + 2 // 5

// 더하기 할당 연산자 +=
// 이외에도 - * / % 다 가능하다.
a += 2 // 5

----------------------------------------------
// 증가(Increment & Decrement)
// 이외에도 - 가능하다
let a = 3
// 후위증가
console.log(a++) // 3
console.log(a) // 4
// 전위증가
console.log(++a) // 4
console.log(a) // 4

----------------------------------------------
```
