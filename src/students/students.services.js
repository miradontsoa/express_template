const studentsServices = {};

/**
 * Get a student item
 */
studentsServices.getStudentById = async (id) => {
  return {
    id: id,
    name: `Name of the student ${id}`,
  };
};

/**
 * Get all students
 */
studentsServices.getAllStudents = async (filter) => {
  return [{
    id: "A001",
    name: "Pierre Thomson"
  },{
    id: "A002",
    name: "Sue Roberts"
  }];
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