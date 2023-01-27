const { users } = require('../data');

const resolvers = {
  Query: {
    users: (root, args) => {
      return users;
    },
  },
};

module.exports = resolvers;
