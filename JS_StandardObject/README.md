# 💼표준 내장 객체 (Standard Built-in Object)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [String Method](#1%EF%B8%8F⃣-string-method)
  - [includes](#includes)
  - [indexOf](#indexOf)
  - [padend](#padend)
  - [padstart](#padstart)

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
