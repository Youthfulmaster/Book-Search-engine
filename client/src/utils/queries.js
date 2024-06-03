import { gql } from '@apollo/client';

export const QUERY_ME = gql`
   {
    me {
      _id
      username
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }`