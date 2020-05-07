const {
  status,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
} = require("../resolvers/users/user-resolvers.js");

const {
  getAllEvents,
  getEventById,
  getAuthoredEvents,
  addEvent,
  updateEvent,
  removeEvent,
  inviteUserToEvent,
  updateInvitation,
  removeInvitation
} = require("../resolvers/events/event-resolvers.js");

const {
  getCategories,
  getCategoryById,
  addCategory,
} = require("../resolvers/categories/category-resolvers.js");

module.exports = {
  Query: {
    status,
    getAllUsers,
    getUserById,
    getAuthoredEvents,
    getAllEvents,
    getEventById,
    getCategories,
    getCategoryById,
  },
  Mutation: {
    addUser,
    updateUser,
    removeUser,
    addEvent,
    updateEvent,
    removeEvent,
    addCategory,
    inviteUserToEvent,
    updateInvitation,
    removeInvitation
  },
};
