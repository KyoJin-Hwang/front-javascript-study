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
