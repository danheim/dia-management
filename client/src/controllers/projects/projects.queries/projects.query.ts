import { gql } from '@apollo/client';

export const PROJECTS_QUERY = gql`
  query GetProjects {
    projects {
      id
      title
      description
      startDate
      creationDate
      releaseDate
    }
  }
`;
