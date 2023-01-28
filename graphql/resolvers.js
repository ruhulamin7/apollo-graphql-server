const { users, posts } = require('../data');

const resolvers = {
  Post: {
    user: (post, args) => {
      const user = users.find((user) => user.id == post.user);
      return user;
    },
  },

  User: {
    posts: (user, args) => {
      const post = posts.filter((post) => user.posts.includes(post.id));
      return post;
    },
  },

  Query: {
    users: (root, args) => {
      return users;
    },
    user: (root, { id }) => {
      const user = users.find((user) => user.id == id);
      return user;
    },
    posts: (root, args) => {
      return posts;
    },
    post: (root, { id }) => {
      const post = posts.find((post) => post.id == id);
      return post;
    },
  },

  Mutation: {
    addUser: (
      root,
      { input: { firstName, lastName, phone, gender, email, isMarred } }
    ) => {
      const user = {
        id: users.length + 1,
        firstName,
        lastName,
        phone,
        gender,
        email,
        isMarred,
        posts: [],
      };
      users.push(user);
      return user;
    },

    updateUser: (
      root,
      { id, input: { firstName, lastName, phone, gender, email, isMarried } }
    ) => {
      let updatedUser = null;
      users.forEach((user) => {
        if (user.id == id) {
          if (firstName) user.firstName = firstName;
          if (lastName) user.lastName = lastName;
          if (gender) user.gender = gender;
          if (email) user.email = email;
          if (isMarried) user.isMarried = isMarried;
          if (phone) user.phone = phone;
          updatedUser = user;
        }
      });
      return updatedUser;
    },

    addPost: (root, { input: { title, description } }) => {
      const post = {
        id: posts.length + 1,
        title,
        description,
      };
      posts.push(post);
      return post;
    },
  },
};

module.exports = resolvers;
