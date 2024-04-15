# 💼표준 내장 객체 (Standard Built-in Object) - 날짜

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📝Date]()

### ⏰Date

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
