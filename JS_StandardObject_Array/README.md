# 🍔표준 내장 객체 (Standard Built-in Object) - 배열

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 length](#-length)
- [📌 at](#-at)
- [📌 concat](#-concat)
- [📌 every](#-every)

### 📌 length

- 배열의 길이(숫자)를 반환한다.

```javascript
const arr = ["A", "B", "C"];
console.log(arr.length); // 3

const arr2 = ["난", "황교", "진", "이", "다"];
console.log(arr2.length); // 5
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 at

- 배열을 인덱싱하여 해당 값을 가져온다. .
- 음수 값을 사용하면 뒤에서 부터 인덱싱한다.
- 마지막 아이템을 접근할 때 유용하다.

```javascript
const arr = ["A", "B", "C"];
const arr2 = [1, 2, 3, 4, 5];

console.log(arr[0]); // A
console.log(arr.at(0)); // A

console.log(arr2[arr2.length - 1]); // 5
console.log(arr2.at(-1)); // 5
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 concat

- 해당 배열과 주어진 배열을 병합해 `새로운 배열`을 반환한다.
- 기존 배열은 바뀌지 않는다.

```javascript
const arr1 = ["A", "B", "C"];
const arr2 = ["D", "E", "F"];
const arr3 = arr1.concat(arr2);

console.log(arr1); // ['A', 'B', 'C']
console.log(arr2); // ['D', 'E', 'F']
console.log(arr3); // ['A', 'B', 'C', 'D', 'E', 'F']

// 전개연산자 사용 concat 대신
const arr4 = [...arr1, ...arr2];
console.log(arr4); // ['A', 'B', 'C', 'D', 'E', 'F']
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 every

- 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인한다.
- every의 조건중에서 하나라도 틀릴경우 false 를 반환한다.

```javascript
const arr = [0, 1, 2, 3, 4];
const isValid = arr.every((item) => item < 5);

console.log(isValid); // true
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 filter

- 주어진 콜백 테스트를 통과한 요소만가지고 새로운 배열로 반환한다.
- 모든 요소가 테스트를 통과하지 못하면 빈배열을 반환한ㄷ.

```javascript
const numbers = [1, 2, 5, 104, 20, 56, 78];
const filterArr = numbers.filter((number) => number < 30);

console.log(filterArr); // [ 1, 2, 5, 20 ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>
