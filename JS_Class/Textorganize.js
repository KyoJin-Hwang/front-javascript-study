class Phone {
  constructor(number) {
    this.myNumber = number;
  }
  introduce() {
    return console.log("프로토타입 메소드");
  }
  static isComplain() {
    return console.log("정적 메소드");
  }
}
// 인스턴스 생성
const user = new Phone(7788);

// 클래스
Phone.isComplain();
// 인스턴스
user.introduce();
