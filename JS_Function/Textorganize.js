function user() {
  this.firstName = "Cold";
  this.lastName = "Owen";

  return {
    firstName: "Kyojin",
    lastName: "Hwang",
    age: 28,
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    getArrowFullName: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const u = user();
console.log(u.getFullName());
console.log(u.getArrowFullName());
