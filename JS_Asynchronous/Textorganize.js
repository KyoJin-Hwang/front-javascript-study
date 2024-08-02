const Example = new Promise((resolve, reject) => {
  // 비동기 시작
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        // 네트워크 요청 실패했을때
        throw new Error("네트워크 에러 ");
      }
      return response.json(); // JSON 형태로 변환
    })
    .then((data) => {
      resolve(data); // fetch 요청 성공 데이터
    })
    .catch((error) => {
      reject(error); // fetch 요청 실패 데이터
    });
});

Example.then((data) => {
  // 위에 함수에서의 resolve값
  console.log("Resolve 값 : ", data);
}).catch((error) => {
  console.log("Error : ", error);
});
