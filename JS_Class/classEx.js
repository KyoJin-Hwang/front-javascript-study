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

console.log(b instanceof A); // true
console.log(b instanceof B); // true
console.log(b instanceof C); // false
