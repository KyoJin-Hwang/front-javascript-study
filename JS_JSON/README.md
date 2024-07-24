# 📜표준 내장 객체 (Standard Built-in Object) - JSON

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 ]()
<hr/>

### 📌 JSON 이란?

- 데이터 전달을 위한 표준 포맷
- 문자, 숫자, 불린, Null, 객체, 배열만 사용
- 문자는 큰 따옴표만 사용
- 후행 쉼표 사용 불가
- .json 확장자 사용

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 JSON.stringify

- 데이터를 JSON 문자로 변환한다.

```javascript
console.log(JSON.stringify("Hello World"));
console.log(JSON.stringify(3));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ a: 1, b: 2 }));
console.log(JSON.stringify([1, 2, 3]));
// "Hello World"
// 3
// true
// null
// {"a":1,"b":2}
// [1,2,3]
// 전체 string type
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 JSON.parse

- JSON 문자를 분석해 데이터로 변환한다.

```javascript
console.log(JSON.parse('"Hello World"'));
console.log(JSON.parse("3"));
console.log(JSON.parse("true"));
console.log(JSON.parse("null"));
console.log(JSON.parse('{ "a": 1, "b": 2 }'));
console.log(JSON.parse("[1, 2, 3]"));
// "Hello World"
// 3
// true
// null
// {"a":1,"b":2}
// [1,2,3]
// 각 data type 에 맞게 JSON 해석한다
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>
