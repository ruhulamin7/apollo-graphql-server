const { users } = require('../data');

const resolvers = {
  Query: {
    users: (root, args) => {
      return users;
    },
    user: (root, { id }) => {
      const user = users.find((user) => user.id == id);
      return user;
    },
  },

  Mutation: {
    addUser: (
      root,
      { input: { firstName, lastName, phone, email, isMarred } }
    ) => {
      const user = {
        firstName,
        lastName,
        phone,
        email,
        isMarred,
        posts: [],
      };
      users.push(user);
      return user;
    },
  },
};

module.exports = resolvers;
