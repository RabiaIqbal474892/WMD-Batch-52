// "Building a Student Management System with Object-Oriented TypeScript | Full Tutorial"
// https://www.youtube.com/watch?v=dufUnTkW62w

class Institute {
  name: string;
  student: any = [];

  addStudent(studentobj: Student) {
    this.student.push(studentobj);
  }

  constructor(name: string) {
    this.name = name;
  }
}

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Teacher {
  name: string;
  course: any = [];

  addCourse(courseobj: Course) {
    this.course.push(courseobj);
  }

  constructor(name: string) {
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
