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
      // 여기는 c 함수가 실행된다.
      // then 을 통하여 Promise 안에 resolve로 이동 되기 떄문이다.
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
