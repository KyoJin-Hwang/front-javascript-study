# 💼표준 내장 객체 (Standard Built-in Object)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

1. []()

## 1️⃣ 문자

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
