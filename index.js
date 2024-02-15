const express = require("express");
const studentsRouter = require("./src/students/students.route");
// initial express app
const app = express();
// listnening port
const port = 3000;

app.use(express.json())

// sample hello word or other api endpoints
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// sample students api endpoints
app.use("/students", studentsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
