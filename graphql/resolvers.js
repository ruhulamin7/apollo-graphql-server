const { users, posts } = require('../data');
const { DateType, EmailType, PasswordType } = require('./customTypes');

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
      {
        input: {
          firstName,
          lastName,
          phone,
          gender,
          email,
          isMarred,
          password,
        },
      }
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
        createdAt: new Date(),
        password,
      };
      users.push(user);
      return user;
    },

    updateUser: (
      root,
      {
        id,
        input: {
          firstName,
          lastName,
          phone,
          gender,
          email,
          isMarried,
          password,
        },
      }
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
          if (password) user.password = password;
          updatedUser = user;
        }
      });
      return updatedUser;
    },

    addPost: (root, { input: { title, description, user } }) => {
      const post = {
        id: posts.length + 1,
        title,
        description,
        user,
      };
      posts.push(post);
      return post;
    },

    updatePost: (root, { id, input: { title, description, user } }) => {
      let updatedPost = null;
      posts.forEach((post) => {
        if (post.id == id) {
          if (title) post.title = title;
          if (description) post.description = description;
          if (user) post.user = user;
          updatedPost = post;
        }
      });
      return updatedPost;
    },

    deleteUser: (root, { id }) => {
      const index = users.findIndex((user) => user.id == id);

      if (index >= 0) {
        users.splice(index, 1);
        return true;
      } else {
        return false;
      }
    },

    deletePost: (root, { id }) => {
      const index = posts.findIndex((post) => post.id == id);
      if (index >= 0) {
        posts.splice(index, 1);
        return true;
      } else {
        return false;
      }
    },
  },

  EmailType: EmailType,
  DateType: DateType,
  PasswordType: PasswordType,
};

module.exports = resolvers;
