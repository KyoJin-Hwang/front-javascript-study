function User(first,last){
  this.fristName = first
  this.lastName = last
}

User.prototype.getFullName = function () {
  return `${this.fristName} ${this.lastName}`
}

const kyo = new User('Kyo', 'Jin')
const owen = new User('Owen', 'Cold')

console.log(kyo) // User {firstName: 'Kyo', lastName: 'Jin'}
console.log(owen) // User {firstName: 'Owen', lastName: 'Cold'}

console.log(kyo.getFullName()) // Kyo Jin
console.log(owen.getFullName()) // Owen Cold