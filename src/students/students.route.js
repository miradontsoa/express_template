const { Router } = require("express");
const studentsServices = require("./students.services");

const studentsRouter = Router();

/** Route to get all students */
studentsRouter.get("/", async function (req, res) {
  res.send({
    message: "Items list",
    page: 0,
    count: 0,
    result: await studentsServices.getAllStudents(),
  });
});

/** Route to get a student item */
studentsRouter.get("/:studentId", async function (req, res) {
  const studentId = req.params.studentId;
  const student = await studentsServices.getStudentById(studentId);
  res.send({
    message: "View Item",
    data: student,
  });
});

/** Route to get add student item */
studentsRouter.post("/", async function (req, res) {
  const studentData = {
    name: req.body.name
  }
  const student = await studentsServices.addStudent(studentData);
  res.send({
    success: true,
    message: "Item added",
    data: student,
  });
});

/** Route to get modify student item */
studentsRouter.put("/:studentId", async function (req, res) {
  const studentId = req.params.studentId;
  const studentData = {
    name: req.body.name
  }
  const student = await studentsServices.updateStudent({
    studentId: studentId,
    studentData,
  });
  res.send({
    success: true,
    message: "Item updated",
    data: student,
  });
});

/** Route to get delete student item */
studentsRouter.delete("/:studentId", async function (req, res) {
  const studentId = req.params.studentId;
  const deleteResult = await studentsServices.deleteStudent(studentId);
  if (deleteResult) {
    res.status(204).send({
      success: true,
      message: "Item deleted",
    });
  } else {
    res.status(403).send({
      success: false,
      message: "Can not delete item",
    });
  }
});

module.exports = studentsRouter;
