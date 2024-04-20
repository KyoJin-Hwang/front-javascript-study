# 💼표준 내장 객체 (Standard Built-in Object) - 날짜

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [⏰Date란?](#date란)
- [⏰Date Method](#date-method)
  - [📌getFullYear(), setFullYear()](#getfullyear-setfullyear)
  - [📌getMonth(), setMonth()](#getmonth-setmonth)
  - [📌getDate(), setDate()](#getdate-setdate)
  - [📌getHours(), setHours()](#gethours-sethours)
  - [📌getMinutes(), setMinutes()](#getminutes-setminutes)
  - [📌getSeconds(), setSeconds()](#getseconds-setseconds)

## ⏰Date란?

- Date 객체는 생성자 함수이다.
- Date 생성자 함수는 날짜와 시간을 가지는 인스턴스를 생성한다.
- 인스턴스는 현재 날짜와 시간을 나타낸다.

#### 인수를 전달하지 않는 경우

```javascript
const date = new Date();
console.log(date);
// Mon Apr 15 2024 22:45:37 GMT+0900 (대한민국 표준시)
```

#### 인수를 전달하는 경우

```javascript
const d1 = new Date(2024, 4, 15, 22, 50, 50);
// (년, 월, 일, 시, 분, 초)
console.log(d1);
// Wed May 15 2024 22:48:50 GMT+0900 (대한민국 표준시)
```

## ⏰Date Method

### 📌getFullYear(), setFullYear()

- 날짜 인스턴스의 `연도`를 반환하거나 지정한다.

```javascript
const date = new Date();
console.log(date);
// Mon Apr 15 2024 22:54:21 GMT+0900 (대한민국 표준시)
console.log(date.getFullYear());
// 2024

date.setFullYear(2025);
console.log(date.getFullYear());
// 2025
console.log(date);
// Tue Apr 15 2025 22:54:21 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getMonth(), setMonth()

- 날짜 인스턴스의 `월`을 반환하거나 지정한다.
- '월'은 0부터 시작한다. (Zero-based numbering)

```javascript
const date = new Date();

console.log(date.getMonth() + 1);
// 4
console.log(date);
// Mon Apr 15 2024 22:57:36 GMT+0900 (대한민국 표준시)

date.setMonth(5);
console.log(date.getMonth());
// 5
console.log(date);
// Sat Jun 15 2024 23:01:10 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getDate(), setDate()

- 날짜 인스턴스의 `일`을 반환하거나 지정한다.

```javascript
const date = new Date();

console.log(date.getDate());
// 15
console.log(date);
// Mon Apr 15 2024 23:04:29 GMT+0900 (대한민국 표준시)

date.setDate(11);
console.log(date.getDate());
// 11
console.log(date);
// Thu Apr 11 2024 23:04:29 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getHours(), setHours()

- 날짜 인스턴스의 `시간`을 반환하거나 지정한다.

```javascript
const date = new Date();

console.log(date.getHours()); // 13
console.log(date);
// Fri Apr 19 2024 13:55:46 GMT+0900 (대한민국 표준시)

date.setHours(7);

console.log(date.getHours()); // 7
console.log(date);
// Fri Apr 19 2024 07:55:46 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getMinutes(), setMinutes()

- 날짜 인스턴스의 `분`을 반환하거나 지정한다.

```javascript
const date = new Date();

console.log(date.getMinutes()); // 58
console.log(date);
// Fri Apr 19 2024 13:58:04 GMT+0900 (대한민국 표준시)

date.setMinutes(5);

console.log(date.getMinutes()); // 5
console.log(date);
// Fri Apr 19 2024 13:05:04 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getSeconds(), setSeconds()

- 날짜 인스턴스의 `초`을 반환하거나 지정한다.

```javascript
const date = new Date();

console.log(date.getMinutes()); // 58
console.log(date);
// Fri Apr 19 2024 13:58:04 GMT+0900 (대한민국 표준시)

date.setMinutes(5);

console.log(date.getMinutes()); // 5
console.log(date);
// Fri Apr 19 2024 13:05:04 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getDay()

- 날짜 인스턴스의 '요일' 을 반환한다.

```javascript
const date = new Date();
const day = date.getDay();

console.log(day); // 토
console.log(getDayFuc(day)); // 토요일

function getDayFuc(day) {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
}
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌getTime(), setTime()

- 1970-01-01 00:00:00 (유닉스타임)부터 경과한
- 날짜 인스턴스의 '밀리초(ms)' 을 반환한다.

```javascript
const date = new Date();

console.log(date.getTime()); // 1713623232455
console.log(date); // Sat Apr 20 2024 23:27:12 GMT+0900 (대한민국 표준시)

date.setTime(170000000000);
console.log(date.getTime()); // 170000000000
console.log(date); // Thu May 22 1975 23:13:20 GMT+0900 (대한민국 표준시)
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>

### 📌Date.now()

- 1970-01-01 00:00:00 (유닉스타임)부터 경과한
- 메소드가 호출될 때의 '밀리초(ms)'로 반환한다.

```javascript
const time = new Date().getTime();
console.log(Date.now()); // 1713623549122
console.log(time); // 1713623549122

// 1초이후
setTimeout(() => {
  console.log(Date.now()); // 1713623550139
  console.log(time); // 1713623549122
}, 1000);
```

**[⬆ back to top](#카테고리-category)**

<hr />
<br/>
