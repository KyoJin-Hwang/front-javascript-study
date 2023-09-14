# JS 데이터 설명

<span style="font-size:25px; background-color: rgb(255, 245, 177); color: black; font-weight:bold;">String, Number(원시형)</span>

```javascript
// String
const string1 = "Hello"; // 쌍따옴표
const string2 = "Hello"; // 따옴표
const string3 = `Hello ${string1} ?!`; // 백틱을 이용한 (템플릿 리터럴) 방식
```

```javascript
// number
const number1 = 1;
const number2 = NaN; // Not of Number
const number3 = +"3"; // + 를 string 에 붙이면 number type으로 변환된다 숫자만해당
const number3 = Number("4"); // Number(들어갈 숫자)
```

<span style="font-size:25px; background-color: rgb(255, 245, 177); color: black; font-weight:bold;">Boolean, null, undefined(원시형)</span>

```javascript
// Boolean
const a = true;
const b = false;

if (a) {
  console.log("Hello");
}
if (b) {
  console.log("Hello");
}
// a 는 true 이므로 실행된다
// b 는 flase 이므로 실행되지않는다
```

```javascript
// Null, undefined
// null : 존재 하지않것나 , 알수없거나 , 비어있다. ( 명시적으로 값 x )
// undefined : 값이 없는 상태 ( 암시적으로 값 x )
let age = null;
let age2 = undefined; // === let age2  같은것
console.log(age);
// null 출력

setTimeout(function () {
  age = 85;
  console.log(age);
  // 85
  console.log(age2);
  // 85
}, 1000);

const user = {
  name: "Kyojin",
  age: 85,
};

console.log(user.name);
// kyojin
console.log(user.age);
// 85
console.log(user.email);
// undefined
```
