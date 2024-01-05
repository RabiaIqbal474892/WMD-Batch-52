let guestList: Array<string> = [
  "Muhammad Iqbal",
  "Muhammad Abdullah",
  "Muhammad Abdul Rahman",
  "Muhammad Umar",
  "Muhammad Usman",
  "Muhammad Ali",
];

// Loop for each to print invitation

guestList.forEach((guestName) => {
  console.log(`Dear ${guestName}, you are invited to dinner please join us.`);
});

export {};
