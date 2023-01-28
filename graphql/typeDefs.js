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


    type Query {
        users: [User!]!
        user(id:ID!):User!
        posts:[Post!]!
        post(id:ID!):Post!
    }

    type Mutation {
        addUser(input:UserInput):User
        updateUser(input:UpdateUserInput):User
    }

  
`;

module.exports = typeDefs;
