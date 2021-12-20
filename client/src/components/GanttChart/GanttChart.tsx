import { FC } from 'react';
import cn from 'classnames';
import { Project } from '@/controllers/projects/projects.typedefs';
import styles from '@/components/GanttChart/GanttChart.module.scss';

interface Props {
  projects: Project[];
}

export const GanttChart: FC<Props> = (props) => {
  const { projects } = props;

  return (
    <div className={styles.container}>
      {projects.map((project, projectIndex) => {
        const { tasks } = project;

        return (
          <div className="columns">
            <div className="column is-3">
              <div className={styles.item}>
                <div className={styles.projectTitleContainer}>
                  <span>{projectIndex + 1}</span>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {tasks.map((task, taskIndex) => (
                <div className={styles.item}>
                  <div className={styles.taskTitleContainer}>
                    <span>{`${projectIndex + 1}.${taskIndex + 1}`}</span>
                    <h4 className={styles.taskTitle}>
                      {task.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="column is-9">
              <span>CALENDAR</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
