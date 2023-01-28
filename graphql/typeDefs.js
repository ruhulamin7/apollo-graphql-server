const typeDefs = `#graphql 
    type User {
        id: ID
        firstName: String!
        lastName: String
        gender: GenderEnum
        phone: String
        email: String
        isMarried: Boolean
        #posts:[post!]
    }
  

    enum GenderEnum {
        Female
        Male
    }

    input UserInput {
            id: ID
            firstName : String!
            lastName:String
            gender : GenderEnum
            phone:String
            email:String
            isMarried:Boolean
            #posts:[post!]
    }

    type Query {
        users: [User!]!
        user(id:ID!):User!
    }

    type Mutation {
        addUser(input:UserInput):User
    }

  
`;

module.exports = typeDefs;
