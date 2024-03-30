# 💼표준 내장 객체 (Standard Built-in Object)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

1. []()

## 1️⃣ 문자

### <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String">String Mdn Site</a>

```javascript
const str = "Hello world!";
console.log(str.length); // 12
```

### `includes`

```javascript
// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지 확인한다. 반환값(boolean)
includes(searchString, position);
```

#### `searchString` : 이 문자열에서 찾을 다른 문자열. 정규표현식이 올 수 없다.

#### `position` : `searchString`을 찾기 시작할 위치. (기본값 0).

### `ex1)`

```javascript
const str = "Hello world!";
console.log(str.includes("Hello")); // true
console.log(str.includes("hello")); // false
console.log(str.includes("Hello", 0)); // true
console.log(str.includes("Hello", 1)); // false
```

**[⬆ back to top](#카테고리-category)**
<br/>
