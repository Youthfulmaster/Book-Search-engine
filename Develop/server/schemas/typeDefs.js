const { gql } = require('graphql-tag');

const typeDefs = gql`
  # Input type for saving a book
  input SaveBook {
    authors: [String]!
    description: String!
    title: String!
    bookId: String!
    image: String!
    link: String!
  }

  # Define the Book type with its fields
  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  # Define the User type with its fields
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  # Define the Auth type for authentication responses
  type Auth {
    token: ID!
    user: User
  }

  # Define the Query type with a 'me' query to fetch the authenticated user's details
  type Query {
    me: User
  }

  # Define the Mutation type with various mutations for user actions
  type Mutation {
    # Mutation to add a new user
    addUser(username: String!, email: String!, password: String!): Auth
    # Mutation to log in a user
    login(email: String!, password: String!): Auth
    # Mutation to save a book to the user's saved books
    saveBook(input: SaveBook): User
    # Mutation to remove a book from the user's saved books
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
