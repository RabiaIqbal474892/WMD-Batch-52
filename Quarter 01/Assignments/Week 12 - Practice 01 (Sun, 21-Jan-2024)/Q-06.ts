/*
Q # 06

// Functions

// 6. Palindrome Check
// Write a function to check if a given string is a palindrome. Consider reversing the string and comparing it with the original.
*/

// Function to check if a string is a palindrome
function isPalindrome(inputString: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the string
  const reversedString = cleanedString.split("").reverse().join("");

  // Compare the original and reversed strings
  return cleanedString === reversedString;
}

// Example usage
const palindromeString = "A man, a plan, a canal, Panama";
const nonPalindromeString = "Hello, World!";

console.log(
  `Is "${palindromeString}" a palindrome? ${isPalindrome(palindromeString)}`
); // Output: true
console.log(
  `Is "${nonPalindromeString}" a palindrome? ${isPalindrome(
    nonPalindromeString
  )}`
); // Output: false

// split(""):
// The split method is used to split a string into an array of substrings based on a specified separator.
// In this case, an empty string ("") is used as the separator. This effectively splits the string into an array of its individual characters.

// reverse():
// The reverse method is applied to the resulting array from the split operation.
// It reverses the order of elements in the array. So, if the array represents the characters of a string, calling reverse will reverse the order of those characters.

// join(""):
// The join method is applied to the reversed array.
// It joins the elements of an array into a single string. The parameter passed to join (in this case, an empty string "") specifies the separator between the joined elements. Using an empty string means that the characters will be concatenated without any separator.
