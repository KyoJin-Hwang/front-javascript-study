# JS 연산자와 구문

**by 황교진**

## 산술, 할당, 증감 연산자

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

## 부정, 비교 연산자

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

## 논리 연산자

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

## 병합연산자 Nullish Coalescing

```javascript
// null 과 undefined 만 넘어간다.

const n = 0;

const num = n ?? 7;
console.log(num); // 0

// 더이상 넘어갈것이 없으므로 undefined return
console.log(null ?? undefined); // undefined
```

## 삼항연산자

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

## 전개연산자 ( Spread Operator )

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
