const typeDefs = `#graphql 

    scalar  PasswordType
    scalar  EmailType
    scalar  DateType


    enum GenderEnum {
        Female
        Male
    }
"""it is for user"""
    type User {
        id: ID!
        firstName: String!
        lastName: String
        gender: GenderEnum!
        phone: String
        email: EmailType!
        isMarried: Boolean
        posts:[Post!]
        createdAt:DateType!
        password:PasswordType!
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
            email: EmailType!
            isMarried: Boolean  
            password:PasswordType!    
    }

   
    """Update the user"""
    input UpdateUserInput {
            id: ID
            firstName: String
            lastName: String
            gender: GenderEnum
            phone: String
            email: EmailType
            isMarried: Boolean 
            password:PasswordType   
    }

    input PostInput {
        title: String!
        description: String  
        user: ID!      
    }
"""Update the post"""
    input UpdatePostInput {
        title: String
        description: String
        user: ID!  
    }

    type Query {
        users: [User!]!
        user(id:ID!):User!
        posts:[Post!]!
        post(id:ID!):Post!
    }

    type Mutation {
        """Add a new user"""
        addUser(input:UserInput):User
        updateUser(id:ID! input:UpdateUserInput):User
        addPost(input:PostInput):Post 
        updatePost(id:ID!, input:UpdatePostInput):Post
        deleteUser(id:ID!):Boolean!
        deletePost(id:ID!):Boolean!

    }
`;

module.exports = typeDefs;
