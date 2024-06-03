import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($book: SaveBookInput!) {
    saveBook(input: $book) {
      _id
      username
      savedBooks {
        bookId
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookid: String!) {
    removeBook(bookId: $bookid) {
      _id
      username
      savedBooks {
        bookId
        title
      }
    }
  }
`;


