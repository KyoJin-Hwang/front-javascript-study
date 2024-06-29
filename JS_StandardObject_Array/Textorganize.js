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
