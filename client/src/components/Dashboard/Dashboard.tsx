import { FC } from 'react';
import { useProjects } from '@/controllers/projects/projects.hooks/useProjects';

export const DashboardModule: FC = () => {
  const [projects] = useProjects();

  return (
    <div>
      <h2>Projects</h2>

      <ul>
        {projects.length > 0 && projects.map((project) => (
          <li key={project.id}>
            <div>{project.title}</div>
            <div>{project.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
