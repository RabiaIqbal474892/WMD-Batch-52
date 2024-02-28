// Typescript project for beginners | typescript to Javascript | ( CLI Project Student Management )
// https://www.youtube.com/watch?v=DsWQd1qQl-E&t=175s
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
// School
let school1 = new School("Happy Palace");
let school2 = new School("Lahore Academy");
let school3 = new School("Pakland");
// Student
let student1 = new Student("Amna", 21, school1.name);
let student2 = new Student("Ayesha", 19, school2.name);
let student3 = new Student("Usman", 20, school3.name);
// Teacher
let teacher1 = new Teacher("Nida", 32, school1.name);
let teacher2 = new Teacher("Fatima", 30, school2.name);
let teacher3 = new Teacher("Rabia", 20, school3.name);
// console.log(school1);
// console.log(student1);
// Student
school1.addStudent(student1);
school2.addStudent(student2);
school3.addStudent(student3);
// Teacher
school1.addTeacher(teacher1);
school2.addTeacher(teacher2);
school3.addTeacher(teacher3);
console.log(school1);
console.log(school2);
console.log(school3);
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
export {};
