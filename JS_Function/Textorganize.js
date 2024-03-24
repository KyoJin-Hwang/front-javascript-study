const user = {
  firstName: "Kyojin",
  lastName: "Hwang",
  age: 28,
  getFullName: function () {
    // user 안에서 사용하기 때문에 단순하게 this로 접근이 가능하다
    return `${user.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
