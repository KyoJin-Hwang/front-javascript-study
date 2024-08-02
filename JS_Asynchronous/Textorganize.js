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
