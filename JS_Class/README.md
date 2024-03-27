# 📖자바스크립트 클래스 (JavaScript Class)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

1. [Prototype](#1%EF%B8%8F⃣-prototype)

<br/>

## 1️⃣ Prototype

### 📌 1. Prototype이란?🧐

- 자바스크립트의 모든 객체는 자신의 `부모 역할`을 담당하는 `객체와 연결`되어 있다. 그리고 이것은 마치<br/>`객체 지향의 상속 개념`과 같이 부모 객체의 `프로퍼티` 또는 `메소드`를 `상속`받아 사용할 수 있게 한다.<br/>이러한 부모 객체를 `Prototype(프로토타입) 객체` 또는 줄여서 `Prototype(프로토타입)`이라 한다.

```javascript
// prototype

// 잠깐 리터럴이란?🧐
// 리터럴은 데이터(값) 그 자체를 뜻한다. 즉, 변수에 넣는 변하지 않는 데이터를 의미하는 것.
// 객체리터럴, 배열리터럴 등등 여러가지가 있다.

// 여기서 fruits 는 new Array를 통한 instance 이다.
const fruits = new Array("Apple", "Banana", "Cherry");

console.log(fruits); // (3) ['Apple', 'Banana', 'Cherry']
console.log(fruits.length); // 3
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Melon")); // false

// 프로토타입 속성에서 우리가 인위적으로 만드는 어떤 메소드는
// 기본적으로 function 키워드를 사용하는 일반 함수를 써준다.
Array.prototype.kyojin = function () {
  console.log(this); // this는 fruits를 가리킨다.
};

fruits.kyojin(); // (3) ['Apple', 'Banana', 'Cherry']

const arr = ["order"];
arr.kyojin(); // ['order]

--------------------------------------------------

// 🔊리터럴 방식

const owen1 = {
  firstName: "Owen",
  lastName: "Cold",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const kyo1 = {
  firstName: "Kyo",
  lastName: "Jin",
};

// kyo는 owen 이라는 리터럴객체에서 getFullName을 빌려썻다.
console.log(owen1.getFullName.call(kyo1)); // Kyo Jin

// 🔊생성자 함수 방식

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// 프로토타입에 공통함수 적용
User.prototype.getFullName = function () {
  return `${this.firstName}  ${this.lastName}`;
};

const owen2 = new User("Owen", "Cold");
const kyo2 = new User("Kyo", "Jin");

console.log(owen2);
console.log(kyo2);
console.log(owen2.getFullName());
console.log(kyo2.getFullName());

```

**[⬆ back to top](#카테고리-category)**
<br/>

## 2️⃣ Class 기본문법

### Class란?🧐

- 클래스의 이름은 `Korea`와 같이 대문자로 시작한다.
- 클래스는 반드시 정의한 뒤에 사용할 수 있다.
- 클래스 내에 정의된 함수를 `method`라고 부른다
- 클래스를 통해 생성된 객체를 `인스턴스(instance)`라고 부른다.

### `prototype`

```javascript
function User(first, last) {
  this.fristName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.fristName} ${this.lastName}`;
};

const kyo = new User("Kyo", "Jin");
const owen = new User("Owen", "Cold");

console.log(kyo); // User {firstName: 'Kyo', lastName: 'Jin'}
console.log(owen); // User {firstName: 'Owen', lastName: 'Cold'}

console.log(kyo.getFullName()); // Kyo Jin
console.log(owen.getFullName()); // Owen Cold
```

### `class`

```javascript
class User {
  // constructor 는 이전의 function User 역할을 한다
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  // 쉼표를 쓰지않고 함수를 바로 작성한다.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const kyo = new User("Kyo", "Jin");
const owen = new User("Owen", "Cold");

console.log(kyo); // User {firstName: 'Kyo', lastName: 'Jin'}
console.log(owen); // User {firstName: 'Owen', lastName: 'Cold'}

console.log(kyo.getFullName()); // Kyo Jin
console.log(owen.getFullName()); // Owen Cold
```
