import _ from "lodash";

console.log(_.upperCase("hello-world"));

interface User {
  name: String;
  age: number;
}

const user: User = {
  name: "KyoJin",
  age: 27,
};

console.log(user);
