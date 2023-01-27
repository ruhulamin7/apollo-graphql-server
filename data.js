const users = [
  {
    id: 1,
    firstName: 'Joy',
    lastName: 'Sarkar',
    gender: 'male',
    phone: '01792384909',
    email: 'joy@sarkar.com',
    isMarried: false,
    posts: [1, 2],
    createdAt: '2023-01-22T18:47:59.894Z',
    password: 'Abc@s123',
  },
  {
    id: 2,
    firstName: 'Ruhul',
    lastName: 'Amin',
    gender: 'male',
    phone: '01739713734',
    email: 'ruhul@amin.com',
    isMarried: true,
    posts: [3],
    createdAt: '2023-01-22T18:47:59.894Z',
    password: 'Ruhul@123',
  },
];

const posts = [
  {
    id: 1,
    title: 'GraphQL',
    description: 'GraphQL is a query language for your API',
    user: 1,
  },
  {
    id: 2,
    title: 'JS',
    description: 'Javascript is a programming language',
    user: 1,
  },
  {
    id: 3,
    title: 'PHP',
    description: 'PHP is a programming language',
    user: 2,
  },
];

module.exports = { users, posts };
