/*
Q # 27

// Logic Building

// 27. Nested Loops
// Solve a problem that requires nested loops. Nested loops are useful for handling two-dimensional data structures.
*/

// Function to print a square pattern of stars
function printSquarePattern(size: number): void {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

const patternSize = 5;
printSquarePattern(patternSize);
