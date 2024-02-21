const prisma = require("../db");
const usersServices = {};

/**
 * Get a student item
 */
usersServices.getUserById = async (id) => {
  return {
    id: id,
    name: `Name of the user ${id}`,
  };
};

/**
 * Get all users
 */
usersServices.getAllUsers = async (filter) => {
  const users = await prisma.user.findMany();
  return users;
};

module.exports = usersServices;
