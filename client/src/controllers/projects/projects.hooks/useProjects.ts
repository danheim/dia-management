import { QueryResult, useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { Project } from '@/controllers/projects/projects.typedefs';
import { PROJECTS_QUERY } from '@/controllers/projects/projects.queries/projects.query';

type ProjectsData = {
  projects: Project[];
}

export const useProjects = (): [Project[], QueryResult] => {
  const query = useQuery<ProjectsData>(PROJECTS_QUERY);

  return useMemo(
    () => [query.data?.projects || [], query],
    [query],
  );
};
