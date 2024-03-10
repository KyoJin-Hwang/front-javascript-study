# 🛠JS 연산자와 구문 (Javascript Operator, Syntax)

`by Kyojin Hwang`
<br/>

## 📚카테고리 (Category)

1. [산술, 할당, 증감 연산자](#-산술-할당-증감-연산자)
1. [부정, 비교 연산자](#-부정-비교-연산자)
1. [논리 연산자](#-논리-연산자)
1. [병합연산자 Nullish Coalescing](#-병합연산자-nullish-coalescing)
1. [삼항연산자](#-삼항연산자)
1. [전개연산자 ( Spread Operator )](#-전개연산자--spread-operator-)
1. [구조 분해 할당 ( Destructuring Assignment )](#-구조-분해-할당--destructuring-assignment-)
1. [선택적 체이닝 ( Optional Chaining )](#-선택적-체이닝--optional-chaining-)
1. [if, switch조건문](#-if-swich-조건문)

<br/>

## ✔ 산술, 할당, 증감 연산자

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

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 부정, 비교 연산자

```javascript
// 부정(Negation) : 데이터에 반대되는 Boolean 데이터
console.log(!true) // false
console.log(!false) // true

// 비교 (Comparison)
const a = 1
const b = 3

// 일치
console.log( a === b ) // false
// 불일치
console.log( a !== b ) // true

// 크다
console.log( a > b ) //false
// 크거나 같음
console.log( a >= b ) //false
// 작다
console.log( a < b ) //true
// 작거나 같음
console.log( a <>= b ) //true
----------------------------------------------

```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 논리 연산자

```javascript
// 논리 (Logical)

// AND 연산자 : 두 변수의 값이 TRUE 일때 만 적용
const a = true
const b = false

if (a && b) {
    console.log('모두가 참')
    // 실행되지 않는다 b 는 false 이므로
    // b가 true 일경우에는 실행됨
}

// 왼쪽값이 True 일때는 오른쪽 값 return
// 왼쪽값이 False 일때는 왼쪽 값 return
// true는 넘어가고 맨마지막도 true 일경우까지 찾아서 그값을 준다. false 나타나면 그값을 바로준다.
console.log("hello" && null); // null
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null



----------------------------------------------

// OR 연산자 : 두 변수 중 한개의 값이 TRUE 일경우 적용
const a = true
const b = false
if (a || b){
    console.log('한개가 참')
    // 한개가 참
}

// 왼쪽값이 True 일때는 왼쪽 값 return
// 왼쪽값이 False 일때는 오른쪽 값 return
// 거짓은 넘어가고 맨마지막도 거짓일 경우까지 찾아서 그값을 준다 true 나타나면 그값을 바로준다.
console.log(false || 'hello') // 'hello'
console.log('' || 'hello') // 'hello'
console.log('트루' || 'hello') // '트루'
console.log(1 || 'hello') // 1

----------------------------------------------

```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 병합연산자 Nullish Coalescing

```javascript
// null 과 undefined 만 넘어간다.

const n = 0;

const num = n ?? 7;
console.log(num); // 0

// 더이상 넘어갈것이 없으므로 undefined return
console.log(null ?? undefined); // undefined
```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 삼항연산자

```javascript
const a = 1;
if (a < 2) {
  console.log("참"); // a는 1이므로 참조건문 실행
} else {
  console.log("거짓"); // 실행 x
}

// 조건작성 ?  '참일때' : '거짓일때'
console.log(a < 2 ? "참!" : "거짓"); // 참!
```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 전개연산자 ( Spread Operator )

```javascript
//  기호 : ...

const a = [1, 2, 3];
console.log(a); // [1,2,3]
console.log(...a); // 1,2,3   대괄호가 증발한다.

----------------------------------------------

//배열
const a = [1,2,3]
const b = [4,5,6]

const c = a.concat(b)
console.log(c) // [1,2,3,4,5,6]

const d = [...a, ...b]
console.log(d) // [1,2,3,4,5,6]

----------------------------------------------

//객체
const a = {x: 1, y: 2}
const b = {y: 3, z: 4}

const c = Object.assign({},a,b)
// 객체가 붙을때 마지막에 있는 key와 value로 적용 된다  ex) => y
console.log(c) // {x:1, y:3, z:4}

const d = { ...a , ...b }
console.log(d) // {x:1, y:3, z:4}

----------------------------------------------

function fn(x,y,z) {
    console.log(x,y,z)
}

fn(1,2,3) // 1 2 3

const a = [1,2,3]

fn(...a)  // 1 2 3

```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 구조 분해 할당 ( Destructuring Assignment )

```javascript
// 배열 구조 분해 할당
const arr = [1, 2, 3];

// 효율 x ( 구조 분해 할당x )
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 1 2 3

// 방법 1
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

// 방법 2
let a = 0;
let b = 0;
let c = 0;
[a, b, c] = arr;
console.log(a, b, c); // 1 2 3

// 방법 3 (해당부분 건너뛸때)
let b = 0;
let c = 0;
// 쉼표를 적으면서 넘어간다
[, b, c] = arr;
console.log(b, c); // 2 3

// 방법 4
const [a, ...rest] = arr;
console.log(a, rest); // 1 [2, 3]

----------------------------------------------

// 객체 구조 분해 할당

const obj = {
  a: 1,
  b: 2,
  c: 3
}

// 방법 1
const { a , b } = obj
console.log(a, b) // 1 2

// 방법 2
// 배열 같은경우에는 순서를 맞춰야하지만 객체는 키값으로만 뽑아서 사용할 수 있다.
const { c } = obj
console.log(c)

// 방법 3
// obj 안에 들어가지는 않는다
const { x = 4 } = obj
console.log(x) // 4

// 방법 4
// 키값의 변수명을 변경할 수 있다.
const { a: kyo } = obj
console.log(kyo) // 1

// 객체의 전개연산자
const obj2 = {
  one:1,
  two:2,
  three:3,
  four:4,
  five:5
}

const { three, ...rest } = obj
// three 가 빠지고 rest는 나머지의 것들을 객체로 가지고 있는다.
console.log( three, rest)
// 3
// {one:1, two:2, four:4, five:5 }



```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ 선택적 체이닝 ( Optional Chaining )

```javascript
// 물음표와 마침표를 통해서 선택적으로 점표기법의 체이닝 방식을 사용하는 것
// 에러가 발생할 때 방지하는 용도로 사용한다.
const user = null || undefined;

// ❌Error
// 💣 null 또는 undefined 는 속성을 조회할 수 없어서 에러가 난다.
// 이러한 경우 선택적 체이닝(❓❗)을 사용할 수 있다.
console.log(user.name); // err

// ⭕Success
console.log(user?.name); // undefined


----------------------------------------------

const userA = {
  name: 'kyojin',
  age: 28,
  address: {
    country: 'Korea',
    city: 'Yeosu',
  }
}

const userB = {
  name: 'minsu',
  age: 24,
}

function getCity(user) {
  return user.address?.city || '주소 없음.'
}

console.log(getCity(userA)) // Yeosu
console.log(getCtiy(userB)) // 주소 없음.

```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ if, Swich 조건문

```javascript

* if *

// 방법1 : 한가지 조건
if (조건) {
  // 조건이 참(true)일때 실행
}

// 방법2 : true일때 와 아닐 때의 나머지
if (조건) {
  // 조건이 참(true)일때 실행
} else {
  // if의 조건이 아닐 때 실행
}

// 방법3 : 여러가지 if
if (조건1) {
  // 조건1 참일 때
} else if (조건2) {
  // 조건2 참일 때
} else if (조건3) {
  // 조건3 참일 때
} else {
  // 위의 조건이 다 해당하지 않을 때
}

----------------------------------------------

* switch *

switch (조건){
  case 값1:
    // 조건이 '값1'일 때 실행
    break;
  case 값2:
    // 조건이 '값2'일 때 실행
    break;
  default:
    // 조건이 값1, 값2도 아닐 때 실행
}


```

**[⬆ back to top](#카테고리-category)**
<br/>

## ✔ For, For of, For in 반복문

```javascript
// For 반복문
for(초기화; 조건; 증감){
  // 반복 실행할 코드
}

// break : 사용하여 멈출 수 있다
// continue : 현재 반복을 종료하고 다음 반복으로 넘어간다.

//ex
for(let i = 0; i < 10; i+=1){
  // 10번 반복된다
  console.log(i);
  // 0,1 ,2,3,4,5,6,7,8,9
}

//ex2
for(let i = 9; i > -1; i -= 1 ){
  if(i % 2 === 0 ){
    continue
  }
  console.log(i)
  // 9, 7, 5, 3, 1
}

----------------------------------------------
// For of 반복문

const fruits = ['Apple', 'Banana', 'Melon']

for (const fruit of fruits){
  console.log(a)
  // Apple, Banana, Cherry
}

----------------------------------------------
// For in 반복문
const user = {
  name: 'kyojin',
  age: '28',
  isValid: true,
  email : 'owen1127@naver.com'
}

for(const key in user){
  console.log(key)
  // name, age, isValid, email
  console.log(user[key])
  // 'kyojin', 28, true, owen1127@naver.com
}


```
