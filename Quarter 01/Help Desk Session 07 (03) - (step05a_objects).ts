//############################################################################

// Help Desk Session 07 - (step04_unions_literals, step05a_objects, step05b_object_aliased, step05c_structural_typing_object_literals, step05d_nested_objects)

//   (https://www.youtube.com/watch?v=93kam-INDjI&t=100s)

//############################################################################

// step05a_objects

let teacher = {
  name: "Zeeshan",
  experience: "10",
};

console.log(teacher.name);
console.log(teacher["experience"]);

// Type Declaration
let student: {
  name: string;
  age: number;
};

student = {
  name: "Hira",
  age: 30,
};

console.log(student["name"]);
console.log(student.age);

//############################################

let str: string;
str = "Rabiaa";

let str2: string = "Rabiaa";

let str3 = "Rabiaa";

//############################################

// Type Declaration
let student2: {
  name: string;
  age: number;
} = {
  name: "Hira",
  age: 30,
};

// Type Declaration
let student3: { name: string; age: number } = {
  name: "Hira",
  age: 30,
};

//############################################################################
