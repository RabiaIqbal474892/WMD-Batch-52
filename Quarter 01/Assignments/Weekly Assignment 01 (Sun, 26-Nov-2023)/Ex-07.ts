/*
Exercise 7: Write a program that determines if an alphabet is vowel or consonant.
*/

function checkVowelOrConsonant(alphabet: string): string {
  const lowercaseAlphabet = alphabet.toLowerCase();

  if (lowercaseAlphabet.length === 1 && /^[a-z]$/.test(lowercaseAlphabet)) {
    // Check if the input is a single alphabet character
    if (
      lowercaseAlphabet === "a" ||
      lowercaseAlphabet === "e" ||
      lowercaseAlphabet === "i" ||
      lowercaseAlphabet === "o" ||
      lowercaseAlphabet === "u"
    ) {
      return "Vowel";
    } else {
      return "Consonant";
    }
  } else {
    return "Invalid input";
  }
}

const inputAlphabet: string = "A";
const result: string = checkVowelOrConsonant(inputAlphabet);
console.log(`${inputAlphabet} is a ${result}.`);

// ########################################### Method 2 ###########################################

let alphabet: string = "a";
if (
  alphabet == "a" ||
  alphabet == "e" ||
  alphabet == "i" ||
  alphabet == "o" ||
  alphabet == "u"
) {
  console.log("Vowel");
} else {
  console.log("consonants");
}
