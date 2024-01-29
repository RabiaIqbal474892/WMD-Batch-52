/*
Q # 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var guestList = [
    "Muhammad Iqbal",
    "Abdul Qayyum",
    "Muhammad Abdullah",
    "Muhammad Abdul Rahman",
    "Muhammad Umar",
    "Muhammad Usman",
    "Muhammad Ali",
];
// Loop for each to print invitation
guestList.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, ", you are invited to dinner please join us."));
});
// #####################################################################################################
// Another Method
// Define an array of favorite transportation with brand
var guestList2 = [
    "Muhammad Iqbal",
    "Abdul Qayyum",
    "Muhammad Abdullah",
    "Muhammad Abdul Rahman",
    "Muhammad Umar",
    "Muhammad Usman",
    "Muhammad Ali",
];
// Iterate through the array and print statements
guestList2.forEach(function (guestName2) {
    console.log("Dear ".concat(guestName2, ", you are invited to dinner. Please join us."));
});
