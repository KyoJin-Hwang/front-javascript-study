const user = {
  _name: "kyo",

  get name() {
    return user._name;
  },

  set name(value) {
    user._name = value;
  },
};

// user 객체의 name 프로퍼티 값을 변경
user._name = "owen"; // Uncaught RangeError RangeError: Maximum call stack size exceeded

console.log(user.name);
