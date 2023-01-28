const typeDefs = `#graphql 
    enum GenderEnum {
        Female
        Male
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String
        gender: GenderEnum!
        phone: String
        email: String
        isMarried: Boolean
        posts:[Post!]
    }
  
    type Post {
        id: ID!
        title: String!
        description: String
        user: User  
    }


    input UserInput {
            id: ID
            firstName: String!
            lastName: String
            gender: GenderEnum!
            phone: String
            email: String
            isMarried: Boolean      
    }

   

    input UpdateUserInput {
            id: ID
            firstName: String
            lastName: String
            gender: GenderEnum
            phone: String
            email: String
            isMarried: Boolean      
    }

    input PostInput {
        title: String!
        description: String         
    }

    type Query {
        users: [User!]!
        user(id:ID!):User!
        posts:[Post!]!
        post(id:ID!):Post!
    }

    type Mutation {
        addUser(input:UserInput):User
        updateUser(id:ID! input:UpdateUserInput):User
        addPost(input:PostInput):Post
    }
`;

module.exports = typeDefs;
