import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { Project } from '../projects.typedefs';
import { PROJECTS_QUERY } from '../projects.queries/projects.query';

type ProjectsQueryResult = {
  projects: Project[];
}

export const useProjects = (): Project[] => {
  const query = useQuery<ProjectsQueryResult>(PROJECTS_QUERY);

  return useMemo(
    () => query.data?.projects || [],
    [query.data],
  );
};
