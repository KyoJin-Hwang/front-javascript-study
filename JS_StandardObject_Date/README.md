# 💼표준 내장 객체 (Standard Built-in Object) - 날짜

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [⏰Date란?](#date란)
- [⏰Date Method](#date-method)
  - [📌getFullYear(), setFullYear()](#getfullyear-setfullyear)
  - [📌getMonth(), setMonth()](#getmonth-setmonth)
  - [📌getDate(), setDate()](#getdate-setdate)

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
