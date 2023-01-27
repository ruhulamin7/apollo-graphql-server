const typeDefs = `#graphql 
    type User {
        id: ID!
        firstName : String!
        lastName:String!
        # gender : GenderEnum!
        phone:String!
        email:String!
        isMarried:Boolean!
        #posts:[post!]
    }

    enum GangerEnum {
        Female
        Male
    }

    type Query {
        users: [User!]!
    }

  
`;

module.exports = typeDefs;
