// Logic Building

// 29. Leap Year Check
// Implement a program that checks if a given year is a leap year. Leap years have specific conditions, such as being divisible by 4 but not by 100 unless also divisible by 400.

// Function to check if a year is a leap year
function isLeapYear(year: number): boolean {
  // Leap year conditions:
  // 1. Divisible by 4
  // 2. Not divisible by 100 unless also divisible by 400

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const yearToCheck = 2024;

if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}
