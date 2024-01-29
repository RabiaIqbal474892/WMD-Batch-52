/*
Q # 11
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
// Method 1
var names = ["Muhammad", "Ahmad", "Ali", "Khuram"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Method 2
var names2 = [
    "Muhammad Iqbal",
    "Muhammad Umar",
    "Muhammad Usman",
    "Muhammad Abdul Rahman",
];
// Print each person's name one at a time
for (var i = 0; i < names2.length; i++) {
    console.log("Person ".concat(i + 1, ": ").concat(names2[i]));
}
