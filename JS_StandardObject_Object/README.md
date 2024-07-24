# 📕표준 내장 객체 (Standard Built-in Object) - 객체

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 Object.assign](#-objectassign)
- [📌 Object.entries](#-objectentries)
- [📌 Object.keys](#-objectkeys)
- [📌 Object.values](#-objectvalues)
<hr/>

### 📌 Object.assign

- 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사하고 대상 객체를 반환한다.

```javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const result = Object.assign(target, source1, source2);

console.log(result); // { a: 1, b: 3, c: 5, d: 6 }
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 Object.entries()

- 주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소를 추가한 2차원 배열을 반환한다.

```javascript
const user = {
  name: "Owen",
  age: 28,
  isValid: true,
  email: "owen1127@naver.com",
};

console.log(Object.entries(user));

// [
//     [ 'name', 'Owen' ],
//     [ 'age', 28 ],
//     [ 'isValid', true ],
//     [ 'email', 'owen1127@naver.com' ]
// ]

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
  //   name Owen
  //   age 28
  //   isValid true
  //   email owen1127@naver.com
}
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 Object.keys()

- 주어진 객체의 속성 이름을 나열한 배열을 반환한다.

```javascript
const user = {
  name: "Owen",
  age: 28,
  isValid: true,
  email: "owen1127@naver.com",
};

console.log(Object.keys(user));
// [ 'name', 'age', 'isValid', 'email' ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 Object.values()

- 주어진 객체의 속성 값을 나열한 배열을 반환한다.

```javascript
const user = {
  name: "Owen",
  age: 28,
  isValid: true,
  email: "owen1127@naver.com",
};

console.log(Object.values(user));
// [ 'Owen', 28, true, 'owen1127@naver.com' ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>
