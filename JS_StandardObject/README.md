# 💼표준 내장 객체 (Standard Built-in Object)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📝String Method](#1%EF%B8%8F⃣-string-method)
  - [📌includes](#includes)
  - [📌indexOf](#indexOf)
  - [📌padend](#padend)
  - [📌padstart](#padstart)
  - [📌replace](#replace)
  - [📌slice](#slice)
  - [📌split](#split)
  - [📌toLowerCase, toUpperCase](#-tolowercase--touppercase)
  - [📌trim](#trim)
- [📝Number_Method](#2%EF%B8%8F⃣-number-method)
  - [📌tofixed](#tofixed)
  - [📌toLocaleString](#tolocalestring)
  - [📌NumberisInteger](#numberisinteger)
  - [📌Numberparseint-Or-Parseint](#numberparseint-or-parseint)
- [📝Math_Method](#3%EF%B8%8F⃣-math-method)
  - [📌abs](#abs)
  - [📌ceil](#ceil)
  - [📌floor](#floor)
  - [📌round](#round)

## 1️⃣ String Method

### <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String">String Mdn Site</a>

```javascript
// string 글자 갯수
const str = "Hello world!";
console.log(str.length); // 12
```

### `📌includes()`

```javascript
// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지 확인한다. 반환값(boolean)
includes(searchString, position);
```

#### `searchString`

- 이 문자열에서 찾을 다른 문자열이다.
- 정규표현식이 올 수 없다.

#### `position`

- `searchString`을 찾기 시작할 위치.
- 기본값 : 0

### 🎇예제

```javascript
const str = "Hello world!";
console.log(str.includes("Hello")); // true
console.log(str.includes("hello")); // false
console.log(str.includes("Hello", 0)); // true
console.log(str.includes("Hello", 1)); // false

// 조건문으로 사용하기
if (!str.includes("Kyo")) {
  console.log("Kyo 는 없습니다.");
}
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌indexOf()`

```javascript
// .indexOf()
// 대상 문자에 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다.
// 일치하는 문자가 없다면 '-1'을 반환한다.

str.indexOf(searchValue[, fromIndex])
```

#### `searchValue`

- 찾으려는 문자열 or 아무 값도 주어지지 않으면 문자열 "undefined"를 찾으려는 문자열로 사용한다.

#### `fromIndex`

- 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값
- 어떤 정수값도 가능하다.
- 기본값 : 0

### 🎇예제

```javascript
const str = "Hello world!";

// 값이 있는지 없는지
console.log(str.indexOf("Hello")); // 0
console.log(str.indexOf("Kyo")); // -1

// 몇번째부터 시작하고 있는지
console.log(str.indexOf("world")); // 6

// 조건문으로 사용하기
if (str.indexOf("Kyo") === -1) {
  console.log("Kyo 는 없습니다.");
}
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌padEnd()`

```javascript
// .📌padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.

str.padEnd(targetLength [, padString])
```

#### `targetLength`

- 목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

#### `padString`

- 현재 문자열에 채워넣을 다른 문자열.
- 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음.

### 🎇예제

```javascript
const str = "1234567";
const str2 = "1234567890123";

// 문자 길이가 10개 될때까지 0으로 채운다
console.log(str.padEnd(10, "0")); // 1234567000

// 초과하면 원래값 유지
console.log(str2.padEnd(10, "0")); // 1234567890123
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌padStart()`

```javascript
// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞쪽에 붙여 새로운 문자를 반환한다.

str.padStart(targetLength [, padString])
```

#### `targetLength`

목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

#### `padString`

- 현재 문자열에 채워넣을 다른 문자열.
- 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음.

### 🎇예제

```javascript
const str = "1234567";
const str2 = "1234567890123";

// 문자 길이가 10개 될때까지 0으로 채운다
console.log(str.padStart(10, "0")); // 0001234567

// 초과하면 원래값 유지
console.log(str2.padStart(10, "0")); // 1234567890123
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌replace()`

```javascript
// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체하여 새로운 문자를 반환한다.

str.replace(pattern, replacement);
```

#### `pattern`

- 찾을 대상이 되는 문자열 또는 정규 표현식 패턴입니다.

#### `replacement`

- 대체할 새로운 문자열이다.

### 🎇예제

```javascript
const str = "Hello, Hello?!";

console.log(str.replace("Hello", "Hi")); // Hi, Hello?!

// 정규표현식 사용으로 전체 바꾸기
console.log(str.replace(/Hello/g, "Hi")); // Hi, Hi?!

console.log(str); // Hello, Hello?!
```

### 🎇예제(replaceAll : 정규식을 사용하지않고 전체 바꾸고 싶을때)

```javascript
const str = "Hello, Hello?!";

console.log(str.replaceAll("Hello", "Hi")); // Hi, Hi?!
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌slice()`

```javascript
// .slice()
// 대상 문자의 일부를 추출하여 새로운 문자를 반환한다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까찌 추출한다.

str.slice(indexStart);
str.slice(indexStart, indexEnd);
```

#### `indexStart`

- 반환된 하위 문자열에 포함할 첫 번째 문자의 인덱스입니다.

#### `indexEnd`

- 반환된 하위 문자열에서 제외할 첫 번째 문자의 인덱스입니다.

### 🎇예제

```javascript
const str = "Hello wrold!";

console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6, -1)); // wrold
console.log(str.slice(6)); // wrold!
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌split()`

```javascript
// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환한다.
split(separator);
str.split(separator, limit);
```

#### `separator`

- 문자열을 나눌 때 사용할 구분자입니다. 문자열 또는 정규식으로 지정할 수 있습니다.

#### `limit`

- 문자열을 나눌 때 생성되는 배열의 최대 길이를 제한하는 정수입니다.
- 기본값은 -1입니다. -1이면 구분자를 모두 사용하여 문자열을 나눕니다.
- 최대 길이를 초과하여 남은 문자열은 반환하는 배열에 포함되지 않습니다.

### 🎇예제

```javascript
const fruit = "Melon, Apple, Banana";

console.log(fruit.split(",")); // ['Melon', ' Apple', ' Banana']

console.log(fruit.split(",", 1)); // ['Melon']
console.log(fruit.split(",", 2)); // ['Melon', ' Apple']
console.log(fruit.split(",", 3)); // ['Melon', ' Apple', ' Banana']
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌 toLowerCase() , toUpperCase()`

```javascript
// .toLowerCase()
// 대상 문자를 모두 영어 소문자로 변환해 새로운 문자로 반환한다.
toLowerCase();
```

### 🎇예제

```javascript
const str = "APPLE, Banana, CHeRRy";

console.log(str.toLowerCase()); // apple, banana, cherry
```

```javascript
// .toUpperCase()
// 대상 문자를 모두 영어 대문자로 변환해 새로운 문자로 반환한다.
toUpperCase();
```

### 🎇예제

```javascript
const str = "APPLE, Banana, CHeRRy";

console.log(str.toUpperCase()); // APPLE, BANANA, CHERRY
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌trim()`

```javascript
// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환한다.
trim();
```

### 🎇예제

```javascript
const str = " Hey Kyo Come on! ";
console.log(str.trim()); // Hey Kyo Come on!

// 한글포함 test
const str2 = " Kyo 진아 여기로와! ";
console.log(str2.trim()); // Kyo 진아 여기로와!
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

## 2️⃣ Number Method

### `📌toFixed()`

```javascript
// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환한다.

numObj.toFixed([digits]);
```

#### `digits`

- 소수점 뒤에 나타날 자릿수. 0 이상 20 이하의 값을 사용할 수 있다
- 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있다.
- 값을 지정하지 않으면 0을 사용한다.

### 🎇예제

```javascript
const num = 3.1414926535;

// 문자데이터
console.log(num.toFixed(2)); // 3.14 문자타입

//parseFloat 으로 숫자데이터로 변경
console.log(parseFloat(num.toFixed(2))); // 3.14 숫자타입
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌toLocaleString()`

```javascript
// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환한다.

toLocaleString();
```

### 🎇예제

```javascript
const num = 1000000;

console.log(num.toLocaleString()); // 1,000,000
console.log(`${num.toLocaleString()}원`); // 1,000,000원
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌Number.isInteger()`

```javascript
// .Number.isInteger()
// 숫자가 정수 인지 확인한다.

Number.isSafeInteger(testValue);
```

#### `return`

- true주어진 값이 안전한 정수인 경우 부울 값 입니다. 그렇지 않으면 false.

### 🎇예제

```javascript
const num = 123;
const pi = 3.14;

console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(pi)); // false
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌Number.parseInt() or parseInt()`

```javascript
// .parseInt()
// 주어진 값을 파싱해 특정 진수의 정수로 반환한다.

Number.parseInt(string);
Number.parseInt(string, radix);
```

#### `string`

- 구문 분석할 값으로, string 으로 강제 변환된다.
- 이 인수의 선행 공백은 무시한다.

#### `radix`

- 2진수부터 36진수 까지 들어갈 수 있다.
- 를 제외한 나머지는 0 으로 간주한다.

### 🎇예제

```javascript
const str = "123";
const num = 3.14;

// number 데이터
console.log(Number.parseInt(str, 10)); // 123
console.log(Number.parseInt(num, 10)); // 3
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

## 3️⃣ Math Method

### `📌abs()`

```javascript
// Math.abs()
// 주어진 숫자의 절댓값을 반환한다.

Math.abs(x);
```

#### `x`

- 숫자

#### 반환값

- 주어진 숫자의 절대값

### 🎇예제

```javascript
console.log(Math.abs(2)); // 2
console.log(Math.abs(-2)); // 2
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌ceil()`

```javascript
// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환한다.

Math.ceil(x);
```

#### `x`

- 숫자

#### 반환값

- 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자

### 🎇예제

```javascript
console.log(Math.ceil(3.1415926535)); // 4
console.log(Math.ceil(-1.5)); // -1
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌floor()`

```javascript
// Math.floor()
// 주어진 숫자를 내림해 정수를 반환한다.

Math.floor(x);
```

#### `x`

- 숫자

#### 반환값

- 주어진 수 이하의 가장 큰 정수.

### 🎇예제

```javascript
console.log(Math.floor(3.815926535)); // 3
console.log(Math.floor(3.415926535)); // 3
console.log(Math.floor(-1.1)); // -2
console.log(Math.floor(-1.7)); // -2
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌round()`

```javascript
// Math.floor()
// 주어진 숫자를 반올림하여 정수를 반환한다.

Math.round(x);
```

#### `x`

- 숫자

#### 반환값

- 입력값을 반올림한 값과 가장 가까운 정수를 의미합니다.

### 🎇예제

```javascript
const num1 = 3.5;
const num2 = 3.4;

console.log(Math.round(num1)); // 4
console.log(Math.round(num2)); // 3
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌max()`

```javascript
// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환한다.

Math.max()
Math.max(값0)
Math.max(값0, 값1)
Math.max(값0, 값1, ... , 값N)
```

#### `값1, 값2, ...`

- 가장 큰 값을 선택하고 반환할 0개 이상의 숫자입니다.

### 🎇예제

```javascript
console.log(Math.max(1, 20, 40, 100)); // 100
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

### `📌min()`

```javascript
// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환한다.

Math.max()
Math.max(값0)
Math.max(값0, 값1)
Math.max(값0, 값1, ... , 값N)
```

#### `값1, 값2, ...`

- 가장 작은 값을 선택하고 반환할 0개 이상의 숫자입니다.

### 🎇예제

```javascript
console.log(Math.min(-10, 1, 20, 40, 100)); // -10
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>
