/*
Exercise 1: Write a program that calculates the area of a rectangle.
*/

class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  calculateArea(): Number {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(5, 8);
const area = rectangle.calculateArea();

console.log(`The area of the rectangle is ${area}.`);

// Another Method with arrow function

let rectangleArea = (width: number, height: number) => {
  return console.log(`Area of rectangle: ${length * width}`);
};

let len: number = 5;
let width: number = 10;

rectangleArea(len, width);
rectangleArea(10, 20);

export {};
