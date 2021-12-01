import { gql } from '@apollo/client';

export const AUTH_USER_QUERY = gql`
  query GetAuthUser {
    authUser {
      id
      username
    }
  }
`;
