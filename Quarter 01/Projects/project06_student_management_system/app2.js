// "Building a Student Management System with Object-Oriented TypeScript | Full Tutorial"
// https://www.youtube.com/watch?v=dufUnTkW62w
class Institute {
    name;
    student = [];
    addStudent(studentobj) {
        this.student.push(studentobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Teacher {
    name;
    course = [];
    addCourse(courseobj) {
        this.course.push(courseobj);
    }
    constructor(name) {
        this.name = name;
    }
}
let institute1 = new Institute("NUST university");
let studentobj1 = new Student("Hamza Yousaf");
let course1 = new Course("CS");
let teacher1 = new Teacher("Maimoona");
// console.log(institute1);
institute1.addStudent(studentobj1);
console.log(institute1);
teacher1.addCourse(course1);
console.log(teacher1);
export {};
