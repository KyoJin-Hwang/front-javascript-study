class User {
  // constructor 는 이전의 function User 역할을 한다
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  // 쉼표를 쓰지않고 함수를 바로 작성한다.
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const kyo = new User('Kyo', 'Jin')
const owen = new User('Owen', 'Cold')

console.log(kyo) // User {firstName: 'Kyo', lastName: 'Jin'}
console.log(owen) // User {firstName: 'Owen', lastName: 'Cold'}

console.log(kyo.getFullName()) // Kyo Jin
console.log(owen.getFullName()) // Owen Cold