class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // 직접적으로 사용하는 메소드를 만들고 싶을떄는 static
  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true;
    }
    return false;
  }
}

const kyo = new User("Kyo", "Jin");
const owen = new User("Owen", "Cold");
const roy = {
  name: "Roy Wing",
  age: 23,
};

console.log(User.isUser(kyo)); // true
console.log(User.isUser(owen)); // true
// first, last Name 이없어서
console.log(User.isUser(roy)); // false
