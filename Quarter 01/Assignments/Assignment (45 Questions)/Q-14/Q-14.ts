/*
Q # 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

let guestList: Array<string> = [
  "Muhammad Iqbal",
  "Abdul Qayyum",
  "Abdullah",
  "Abdul Rahman",
  "Umar",
  "Usman",
  "Ali",
];

// Loop for each to print invitation

guestList.forEach((guestName) => {
  console.log(`Dear ${guestName}, you are invited to dinner please join us.`);
});

// #####################################################################################################

// Another Method

// Define an array of favorite transportation with brand
const guestList2: string[] = [
  "Muhammad Iqbal",
  "Abdul Qayyum",
  "Abdullah",
  "Abdul Rahman",
  "Umar",
  "Usman",
  "Ali",
];

// Iterate through the array and print statements
guestList2.forEach((guestName) => {
  console.log(`Dear ${guestName}, you are invited to dinner. Please join us.`);
});
