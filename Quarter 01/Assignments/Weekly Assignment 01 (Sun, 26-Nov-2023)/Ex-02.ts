/*
Exercise 2: Write a program that takes input and calculates the volume of a cube.
*/

class Cube {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculateVolumeOfCube(): number {
    return Math.pow(this.sideLength, 3);
  }
}

const cube = new Cube(6);
const volume = cube.calculateVolumeOfCube();

console.log(`The volume of the cube is ${volume}.`);
