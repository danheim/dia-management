import { gql } from '@apollo/client';
import { PROJECT_BASE_FRAGMENT } from '@/controllers/projects/projects.fragments/projectBase.fragment';
import { TASK_BASE_FRAGMENT } from '@/controllers/tasks/tasks.fragments/taskBase.fragment';

export const PROJECTS_QUERY = gql`
  query GetProjects {
    projects {
      ...ProjectBase
      tasks {
        ...TaskBase
      }
    }
  }
  
  ${PROJECT_BASE_FRAGMENT}
  ${TASK_BASE_FRAGMENT}
`;
