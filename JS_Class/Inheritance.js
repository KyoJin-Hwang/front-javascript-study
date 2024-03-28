// 상속(Inheritance)

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0;
    this.acceleration = acceleration;
  }
  accelerate() {
    this.speed += this.acceleration;
  }
  decelerate() {
    if (this.speed <= 0) {
      console.log("정지!");
      return;
    }
    this.speed -= this.acceleration;
  }
}

// 자전거
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    // super는 Vehicle의 constructor 과 같다.
    super(acceleration);
    this.price = price;
    this.wheel = 2;
  }
}

const bicycle = new Bicycle(300);
bicycle.accelerate(); // Speed 1
bicycle.accelerate(); // Speed 2
console.log(bicycle); // Bicycle {speed: 2, acceleration: 1, price: 300, wheel: 2}

// 자동차
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration);
    this.license = license;
    // 자전거의 wheel을 4로 덮는다.
    this.wheel = 4;
  }
  accelerate() {
    if (!this.license) {
      console.log("무면허!");
      return;
    }
    this.speed += this.acceleration;
    console.log("가속!", this.speed);
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);
carA.accelerate(); // 가속! 10
carA.accelerate(); // 가속! 20
carB.accelerate(); // 무면허!
console.log(carA); // Car {speed: 20, acceleration: 10, price: 7000, wheel: 4, license: true}
console.log(carB); // Car {speed: 0, acceleration: 6, price: 4000, wheel: 4, license: false}

// 보트
class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration);
    this.price = price;
    this.motor = 1;
  }
}

const 