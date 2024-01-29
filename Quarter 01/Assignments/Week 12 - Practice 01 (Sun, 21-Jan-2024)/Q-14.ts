// Array Methods

// 14. Transform Words to Lengths
// Transform an array of words into a new array with the lengths of each word. The map function might be useful here.

function getWordLengths(words: string[]): number[] {
  return words.map((word) => word.length);
}

const wordsArray: string[] = ["apple", "mango", "banana", "orange", "grape"];

const wordLengthsArray = getWordLengths(wordsArray);

console.log("Original Array: ", wordsArray);
console.log("Word Lengths Array: ", wordLengthsArray);
