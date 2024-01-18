//############################################################################

// Help Desk Session 07 - (step04_unions_literals, step05a_objects, step05b_object_aliased, step05c_structural_typing_object_literals, step05d_nested_objects)

//   (https://www.youtube.com/watch?v=93kam-INDjI&t=100s)

//############################################################################

// step05e_intersection_types

interface Student {
  student_id: number;
  name: string;
}

interface Teacher {
  teacher_Id: number;
  teacher_name: string;
}

type intersected_type = Student & Teacher;

let obj1: intersected_type = {
  student_id: 3232,
  name: "rita",
  teacher_Id: 7873,
  teacher_name: "seema",
};

console.log(obj1.teacher_Id);
console.log(obj1.name);
