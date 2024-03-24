const user = {
  firstName: "Kyojin",
  lastName: "Hwang",
  age: 28,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
