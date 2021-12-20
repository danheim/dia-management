import { gql } from '@apollo/client';

export const TASK_BASE_FRAGMENT = gql`
  fragment TaskBase on Task {
    id
    title
    startDate
    endDate
    progress
  }
`;
