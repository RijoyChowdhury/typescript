let apples = 5;
const speed: string = 'fast';
const hasName: boolean = true;

const nothing: null = null;
const notDefined: undefined = undefined;

// builtin objects
const now: Date = new Date();

// Arrays
const colors: string[] = ['red', 'green', 'blue'];
const numbers: Array<number> = [5, 65, 100];

// Classes
class Car {}
const myCar: Car = new Car();

// Object literals
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Using annotations
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// Situation when type inference fails
const numberList = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] > 0) {
    numberAboveZero = numberList[i];
  }
}
