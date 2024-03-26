class User {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
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