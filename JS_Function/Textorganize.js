const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (user) => {
  if (user.parent) {
    // userB,C,D 는 parent가 이어져서 다시 함수를 호출한다.
    return getRootUser(user.parent);
  }
  // 마지막으로 A에는 null 이기때문에 A객체가 나오게 된다.
  return user;
};
console.log(getRootUser(userD));
