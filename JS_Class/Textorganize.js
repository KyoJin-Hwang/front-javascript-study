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
    super(acceleration);
    this.price = price;
    this.wheel = 2;
  }
}
