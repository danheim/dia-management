import { gql } from '@apollo/client';

export const PROJECT_BASE_FRAGMENT = gql`
  fragment ProjectBase on Project {
    id
    title
    description
    startDate
  }
`;
