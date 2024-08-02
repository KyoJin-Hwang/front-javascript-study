const test = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve("resolve 성공!");
    } else {
      reject("reject 성공!");
    }
  });
};

test(false)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("난 finally 어떠한 경우에도 마지막에 실행되용!");
  });
