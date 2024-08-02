# 🚀 비동기란? (Asynchronous)

`by Kyojin Hwang`
<br/>

## 📚카테고리 (Category)

- [📔 개요](#-개요)
- [📌 콜백 (Callback)](#-콜백-callback)
- [📌 프로미스 (Promise)](#-프로미스-promise)

## 📔 개요

### 동기 와 비동기

- 동기 (Synchronous) : 순차적으로 코드를 실행 된다.
- 비동기 (Asynchronous) : 순차적으로 코드가 실행 되지않는다.

```javascript
// 동기적
console.log(1);
console.log(2);
console.log(3);
// 1
// 2
// 3

// 비동기적
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);
// 1
// 3
// 2
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

## 📌 콜백 (Callback)

- 다른 함수가 실행을 끝낸 뒤 실행되는 함수이다.

### ⭐️ Callback 이 필요한 이유

- 특정 코드가 끝나기 전까지는 다른 코드가 실행되지 않기 위해 쓰인다.

```javascript
// ex) second는 무조건 first 이후 실행되어야한다!
// 콜백 x
function first1() {
  setTimeout(() => {
    console.log(1);
  }, 1000);
}
function second1() {
  console.log(2);
}
first1();
second1();
// 2
// 1

// 콜백 o
function first2(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
}
function second2() {
  console.log(2);
}
first2(second2);
// 1
// 2
```

### ⭐️ 대표적인 콜백 함수 활용 사례

- inpa블로그 참고

#### `이벤트 리스너로 사용`

```javascript
let btn = document.getElementById("button"); // 요소 선택
// 이벤트 리스너를 추가해준다.
btn.addEventListener("click", () => {
  // 콜백 함수
  console.log(1);
});
```

#### `고차함수에 사용`

```javascript
// ex) 배열을 두배씩 곱하여 새로운 배열을 생성하는 콜백함수 만들기
let numbers = [2, 4, 6, 8]; // 배열 선언
let double = []; // 빈배열 선언

numbers.forEach((num) => {
  double.push(num * 2);
  // 콜백 함수로 각 요소들 두배로 곱해서 배열에 추간
});

console.log(double); // [4, 8, 12, 16]
```

#### `서버와 데이터 주고 받을때 `

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    // fetch 메소드가 성공하면 콜백 함수로 response 인자를 받는다.
    return res.json();
    // res 객체의 json 매소드를 호출하여 json 데이터 반환한다.
  })
  .then((data) => {
    // json 메소드가 성공하면 콜백 함수로 data 인자를 받는다.
    console.log(data);
  });
```

### 🔥 콜백지옥

- 함수의 매개변수로 넘겨지는 콜백 함수가 계속 반복되어 가독성을 떨어뜨리고
  유지보수를 어렵게 만든다.

```javascript
step1(function (value1) {
  step2(function (value2) {
    step3(function (value3) {
      step4(function (value4) {
        step5(function (value5) {
          step6(function (value6) {
            // Do something with value6
          });
        });
      });
    });
  });
});
```

`해결방법`

- Promise 활용
- async/await 활용
- 콜백함수와 결과함수 분리

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

## 📌 프로미스 (Promise)

- 들여쓰기 코드의 길이를 줄여 가독성을 높인다. ( 콜백지옥에 비하여 )
- 비동기 프로그래밍의 기법이다.
- 비동기 메소드에서 동기 메소드처럼 값을 반환 할 수 있다.

### Promise 3가지 상태 

#### - 상태 - 
- 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
- 이행(fulfilled): 연산이 성공적으로 완료됨.
- 거부(rejected): 연산이 실패함.

#### - 주의점 -
- 대기 중인 프로미스는 값과 함께 이행할 수도, 어떤 이유(오류)로 인해 거부될 수도 있다.

### resolve, reject
#### resolve 
- 주어진 값을 `이행`될 경우 `Promise` 객체를 반환한다. 
#### rejecct
- 주어진 값이 `거부` 될 경우 `Promise` 객체를 반환한다.

#### then
- 

```javascript

```

### Promise 체이닝 방식

여러개의 비동기 작업을 순차적으로 수행할 수 있다.

#### 첫번째 예시

```javascript
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};
const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
};
const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

const d = () => console.log(4);

a()
  .then(() => b())
  .then(() => c())
  .then(() => d());
```

#### 두번째 예시

```javascript
function doSomething() {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

doSomething()
  .then((value1) => {
    const data1 = value1 + 50;
    // 150
    return data1;
  })
  .then((value2) => {
    // value 2는 위의 data1 값이된다
    const data2 = value2 + 50;
    // 200
    return data2;
  })
  .then((value3) => {
    // value3은 위의 data2 값이된다.
    const data3 = value3 + 50;
    // 250
    return data3;
  })
  .then((value4) => {
    // value4 === data3
    console.log(value4); // 250 출력
  });

// 순차적으로 위에서부터 아래로 값을 전달해준다.
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>

## 📌 async / await

- 비동기 처리 방식이다.
- `Promise` 기반이다.
- `Promise`보다 코드가 길어질 경우 코드 가독성이 더 좋다.
- `try` , `catch`를 통한 에러핸들링을 한다.
- `await`은 `async` 안에서만 사용 할 수 있다.

#### 예시

```javascript
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};
const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
};
const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

const testAsyncAwait = async () => {
  await a();
  console.log("첫번째!");
  await b();
  console.log("두번째!");
  await c();
  console.log("세번쨰!");
};

testAsyncAwait();
```

### 😎 코드 간소화

상단의 만들어 놓은 async await의 코드를 간소화하기

```javascript
// 함수 한개 및 함수에서 인자를 받아서 처리

const testConsole = (clgNumber) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(clgNumber);
      resolve();
    }, 1000);
  });
};

const testAsyncAwait = async () => {
  await testConsole(1);
  console.log("첫번째!");
  await testConsole(2);
  console.log("두번째!");
  await testConsole(3);
  console.log("세번쨰!");
};

testAsyncAwait();
```

**[⬆ back to top](#카테고리-category)**
<br/>

<hr/>
