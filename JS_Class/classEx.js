class A {
  constructor() {}
}
class B extends A {
  constructor() {
    super();
  }
}
class C extends B {
  constructor() {
    super();
  }
}

const a = new A();
const b = new B();
const c = new C();

console.log(c instanceof A); // true
console.log(c instanceof B); // true
console.log(c instanceof C); // true

console.log(c.constructor === A); // false
console.log(c.constructor === B); // false
console.log(c.constructor === C); // true

// fruits는 Array라는 클래스의 인스턴스 이다.
const fruits = ["Apple", "Banana"];

console.log(fruits.constructor === Array); //true
