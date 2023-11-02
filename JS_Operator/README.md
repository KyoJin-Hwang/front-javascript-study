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

----------------------------------------------

// OR 연산자 : 두 변수 중 한개의 값이 TRUE 일경우 적용
const a = true
const b = false
if (a || b){
    console.log('한개가 참')
    // 한개가 참
}

----------------------------------------------

```
