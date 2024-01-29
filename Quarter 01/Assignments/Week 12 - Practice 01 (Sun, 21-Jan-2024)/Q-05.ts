/*
Q # 05

// Functions

// 5. Rectangle Area Calculation
// Create a function that calculates the area of a rectangle using width and height parameters. Remember the formula: area = width * height.
*/

function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

const rectangleWidth = 5;
const rectangleHeight = 6;

const area = calculateRectangleArea(rectangleWidth, rectangleHeight);
console.log(`The area of the rectangle is ${area} square units.`);
