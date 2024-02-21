const { Router } = require("express");
const usersServices = require("./users.services");

const usersRouter = Router();

/** Route to get all users */
usersRouter.get("/", async function (req, res) {
  res.send({
    message: "Items list",
    page: 0,
    count: 0,
    result: await usersServices.getAllUsers(),
  });
});


module.exports = usersRouter;
