const { users, posts } = require('../data');

const resolvers = {
  Query: {
    users: (root, args) => {
      return users;
    },
    user: (root, { id }) => {
      const user = users.find((user) => user.id == id);
      return user;
    },
    post: (root, args) => {
      return posts;
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
