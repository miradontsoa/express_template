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

module.exports = studentsServices;