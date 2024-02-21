const express = require("express");
const studentsRouter = require("./src/students/students.route");

const prisma = require("./src/db");
const usersRouter = require("./src/users/users.route");
// initial express app
const app = express();
// listnening port
const port = 3000;

// parse json
app.use(express.json())

// sample hello word or other api endpoints
app.get("/", function (req, res) {
  res.send("Hello World!");
});


/* app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
}) */

// sample users api endpoints
app.use("/users", usersRouter)

// sample students api endpoints
app.use("/students", studentsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
