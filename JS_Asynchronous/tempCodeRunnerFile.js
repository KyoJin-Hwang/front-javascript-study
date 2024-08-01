const Example = new Promise((resolve, reject) => {
  // 비동기 시작
  fetch("https://invalid-url") // 잘못된 URL catch
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // JSON 형태로 변환
    })
    .then((data) => {
      resolve(data); // 요청 성공 데이터
    })
    .catch((error) => {
      reject(error); // 요청 실패 데이터
    });
});

Example.then((data) => {
  console.log("Resolve 값 : ", data);
}).catch((error) => {
  console.log("Error : ", error); // 이 블록이 실행됩니다.
});
