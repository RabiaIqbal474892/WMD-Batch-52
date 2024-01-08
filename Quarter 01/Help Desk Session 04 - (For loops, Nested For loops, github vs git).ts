for (var i = 0; i < 5; i++) {
  console.log("Hi", i);
}
console.log(i);

//#################################################################

var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

for (var i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");
    break;
  }
}
console.log(i);

//#################################################################

var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

var matchFound = "no";

for (var i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities");
  }
}

if (matchFound === "no") {
  alert("It's not on the list");
}

//#################################################################

var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

var numElements = cleanestCities.length;
var matchFound2 = false;

for (var i = 0; i < numElements; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    matchFound2 = true;
    console.log("It's one of the cleanest cities");
  }
}

if (matchFound2 === false) {
  console.log("It's not on the list");
}

//#################################################################
// Nested For Loops
//#################################################################

var firstNames = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rag"];
var lastNames = ["Zzz", "Burp", "Einstein", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
  //outer loop // 5 times
  for (var j = 0; j < lastNames.length; j++) {
    //inner loop // 4 times
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

console.log(fullNames);
