/* console.log("Mandeha")

const a = 1;
const b = 2;
console.log(a+b) */

const express = require("express");
// initial express app
const app = express();

const port = 5000;

/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/etudiants/rakoto", function (req, res) {
  res.send({
    id: "00001",
    name: "Nom rakoto",
  });
});

app.get("/etudiants/:student", function (req, res) {
  const studentName = req.params.student;
  res.send({
    id: "00001",
    name: "Nom de l'etudiant " + studentName,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
