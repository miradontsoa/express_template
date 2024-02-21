const prisma = require("../db");
const studentsServices = {};

/**
 * Get a student item
 */
studentsServices.getStudentById = async (id) => {
  
  // Get all students from prisma
  const student = await prisma.student.findUnique({
    where: { id: Number(id) },
    select: {
      firstName: true,
      lastName: true,
    },
  });
  return student;
};

/**
 * Get all students
 */
studentsServices.getAllStudents = async (filter) => {
  // Get all students from prisma
  const students = await prisma.student.findMany();
  return students;
};

/**
 * Add a student item
 */
studentsServices.addStudent = async (studentData) => {
  // TODO: Add student here
  return {id: "NEW_STUDENT_ID_HERE", ...studentData};
};

/**
 * Update student item
 */
studentsServices.updateStudent = async ({studentId, studentData}) => {
  // TODO: Update student here
  return {id: studentId, ...studentData};
};

/**
 * Delete student item
 */
studentsServices.deleteStudent = async (studentId) => {
  // TODO: Delete student here
  return true;
};


module.exports = studentsServices;