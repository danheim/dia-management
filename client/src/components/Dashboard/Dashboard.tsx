import { FC } from 'react';
import { useProjects } from '@/controllers/projects/projects.hooks/useProjects';
import { GanttChart } from '@/components/GanttChart';

export const DashboardModule: FC = () => {
  const [projects] = useProjects();

  return (
    <div className="columns mt-6">
      <div className="column is-8 is-offset-2">
        <h2 className="title">List of projects</h2>

        {projects.length > 0 && (
          <GanttChart projects={projects} />
        )}
      </div>
    </div>
  );
};
