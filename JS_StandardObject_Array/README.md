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
- 모든 요소가 테스트를 통과하지 못하면 빈배열을 반환한다.

```javascript
const numbers = [1, 2, 5, 104, 20, 56, 78];
const filterArr = numbers.filter((number) => number < 30);

console.log(filterArr); // [ 1, 2, 5, 20 ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 find

- 대상 배열에서 콜백 테스트를 통과하는 `첫 번째 요소`를 반환한다.

```javascript
const arr = [5, 8, 130, 12, 44];
const foundItem = arr.find((item) => item > 10);

console.log(foundItem); // 130

const users = [
  { name: "kyo", age: 20 },
  { name: "owen", age: 25 },
  { name: "hwang", age: 23 },
];

const foundUser = users.find((user) => user.age > 22);
console.log(foundUser); // { name: 'owen', age: 25 }
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 findIndex

- 대상 배열에서 콜백 테스트를 통과하는 `첫 번째 요소의 인덱스`를 반환한다.

```javascript
const arr = [5, 8, 130, 12, 44];
const foundItem = arr.find((item) => item > 10);

console.log(foundItem); // 2

const users = [
  { name: "kyo", age: 20 },
  { name: "owen", age: 25 },
  { name: "hwang", age: 23 },
];

const foundUser = users.find((user) => user.age > 22);
console.log(foundUser); // 1
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 flat

- 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성한다.
- 깊이의 기본값은 `1` 이다.

```javascript
const arr = [1, 2, [3, 4]];
console.log(arr.flat()); // [1, 2, 3, 4]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 forEach

- 대상 배열의 길이만큼 주어진 콜백을 실행한다.

```javascript
const arr = ["A", "B", "C"];

// 무조건 콜백하여 반복하고 멈출 수 없다.
arr.forEach((item) => console.log(" forEach " + item)); // A B C

// 장점은 조건으로 반복을 멈출 수 있다.
for (let i = 0; i < arr.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(" for " + arr[i]); // A B
}
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 includes

- 대상 배열이 특정 요소를 포함하고 있는지 확인한다.

```javascript
const fruits = ["Apple", "Banana", "Melon"];
console.log(fruits.includes("Apple")); // true
console.log(fruits.includes("apple")); // false

const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // true
console.log(numbers.includes(7)); // false

const obj = [
  { key: 1, name: "Kyo" },
  { key: 2, name: "Jin" },
  { key: 3, name: "Owen" },
];

console.log(obj.includes({ key: 1, name: "Kyo" })); // false

const kyo = obj[0];

console.log(obj.includes(kyo)); // true
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 join

- 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환한다.

```javascript
const arr = ["Hwang", "Kyo", "Jin"];

console.log(arr.join()); // Hwang,Kyo,Jin
console.log(arr.join(", ")); // Hwang, Kyo, Jin
console.log(arr.join("/")); // Hwang/Kyo/Jin
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 map

- 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환값을 모아 새로운 배열을 생성한다.

```javascript
const arr = [1, 2, 3, 4];
const newArr = arr.map((item) => item * 2);

console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [2, 4, 6, 8]

const users = [
  { key: 1, name: "kyo" },
  { key: 2, name: "Owen" },
  { key: 3, name: "Jin" },
];

const newUsers = users.map((user) => {
  return {
    ...user,
    isVaild: true,
    email: null,
  };
});

console.log(users);
// [
//   { key: 1, name: "kyo" },
//   { key: 2, name: "Owen" },
//   { key: 3, name: "Jin" },
// ];
console.log(newUsers);
// [
//   { key: 1, name: "kyo", isVaild: true, email: null },
//   { key: 2, name: "Owen", isVaild: true, email: null },
//   { key: 3, name: "Jin", isVaild: true, email: null },
// ];
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 pop

- 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
- 대상 배열 원본이 변경된다.

```javascript
const numbers = [1, 2, 3];

numbers.pop(); // 여기에서 마지막 요소가 제거된다.
console.log(numbers); // [1, 2]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 push

- 대상 배열에서 마지막 요소에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
- 대상 배열 원본이 변경된다.

```javascript
const fruits = ["Apple", "Banana"];
console.log(fruits); // [ 'Apple', 'Banana' ]
console.log(fruits.length); // 2

// 새로운 요소 추가
const newLength = fruits.push("Cherry");
console.log(fruits); // [ 'Apple', 'Banana', 'Cherry' ]
console.log(newLength); // 3

// 새로운 요소 두개 추가
fruits.push("Mango", "Melon");
console.log(fruits); // [ 'Apple', 'Banana', 'Cherry', 'Mango', 'Melon' ]
console.log(fruits.length); // 5
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 reduce

- 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환한다.
- 각 콜백의 반환 값은 다음 콜백으로 전달된다.

```javascript
const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log("acc : " + accumulator);
  console.log("cur : " + currentValue);
  //   acc: 1;
  //   cur: 2;
  //   acc: 3;
  //   cur: 3;
  return accumulator + currentValue;
}, 1);

// sum 간단하게 표현한것
const sum2 = numbers.reduce((acc, cur) => acc + cur, 1);

// 초기 값을 1을 더해줘서 7이 나온다.
console.log(sum); // 7
console.log(sum2); // 7

const users = [
  { name: "Kyo", age: 20 },
  { name: "Jin", age: 30 },
  { name: "Owen", age: 50 },
];

// 총 나이 합
const sumAge = users.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(sumAge); // 100

// 모든 이름 추출
const joinName = users
  .reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
  }, [])
  .join(", ");

console.log(joinName); // Kyo, Jin, Owen
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 reverse

- 대상 배열의 순서를 반전한다.
- 대상 배열 원본이 변경된다.

```javascript
const numbers = [1, 30, 44, 52, 23];

console.log(numbers); // [ 1, 30, 44, 52, 23 ]
console.log(numbers.reverse()); // [ 23, 52, 44, 30, 1 ]
console.log(numbers); // [ 23, 52, 44, 30, 1 ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 shift

- 대상 배열에서 첫번째 요소를 제거하고, 제거된 요소를 반환한다.
- 대상 배열의 원본이 변경된다.

```javascript
const arr = ["A", "B", "C"];

console.log(arr); // [ 'A', 'B', 'C' ]
arr.shift();
console.log(arr); // [ 'B', 'C' ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 unshift

- 대상 배열에서 첫번째 요소에 하나 이상의 요소를 추가하고, 새로운 길이를 반환한다.
- 대상 배열의 원본이 변경된다.

```javascript
const arr = ["A", "B", "C"];

console.log(arr); // [ 'A', 'B', 'C' ]
arr.unshift("C", "D", "X");
console.log(arr); // [ 'C', 'D', 'X', 'A', 'B', 'C' ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌 slice

- 대상 배열의 일부를 추출해 새로운 배열을 반환한다.
- 두번째 인수 직전까지 추출하고, 두번째 인수를 생략하면 배열의 끝까지 추출한다.

```javascript
const arr = ["A", "B", "C", "D", "E", "F", "G"];

console.log(arr.slice(0, 3)); // [ 'A', 'B', 'C' ]
console.log(arr.slice(4, -1)); // [ 'E', 'F' ]
console.log(arr.slice(5)); // [ 'F', 'G' ]
console.log(arr); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>
