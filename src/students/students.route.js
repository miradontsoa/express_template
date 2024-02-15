const { Router } = require("express");
const studentsServices = require("./students.services");

const studentsRouter = Router();

studentsRouter.get("/", async function (req, res) {
  res.send({
    message: "Students list here",
    page: 0,
    count: 0,
    result: await studentsServices.getAllStudents(),
  });
});

studentsRouter.get("/:studentId", async function (req, res) {
  const studentId = req.params.studentId;
  const student = await studentsServices.getStudentById(studentId)
  res.send({
    message: "Student item here",
    data: student,
  });
});

module.exports = studentsRouter;
