// Method modifiers:
// Public: method can be called anywhere anytime
// Private: method can only be called by other methods inside this class
// Protected: method can only be called by other methods inside this class or by mthods in child classes

class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // alternate way of wrting constructor initialisation
  constructor(public color: string, private engine: string) {}

  drive(): void {
    this.startEngine();
    console.log('Vroom!!');
  }

  // can only be accessed inside this class
  // or any child classes
  protected honk(): void {
    console.log('Beep beep');
  }

  // can only be accessed inside this class
  // and no child classes or anywhere
  private startEngine(): void {
    console.log('Engine started');
  }

  getEngine(): void {
    console.log(this.engine);
  }
}

class Car extends Vehicle {
  pressHonk(): void {
    this.honk();
  }
}

class RaceCar extends Car {
  constructor(public wheels: number, color: string) {
    super(color, 'v12');
  }
}

const vehicle = new Vehicle('orange', 'v2');
console.log('Vehicle Data:');
console.log(vehicle.color);
vehicle.getEngine();
// vehicle.drive();
// vehicle.honk();

const car = new Car('Teal', 'v8');
console.log('Car Data:');
console.log(car.color);
car.pressHonk();
car.drive();
car.getEngine();

const racingCar = new RaceCar(4, 'Flaming Red');
console.log('Race Car Data:');
console.log(racingCar.color);
console.log(racingCar.wheels);
racingCar.getEngine;
