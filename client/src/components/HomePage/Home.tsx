import { FC } from 'react';
import styles from './Home.module.css';
import { useProjects } from '../../controllers/projects/projects.hooks/useProjects';

export const Home: FC = () => {
  const [projects] = useProjects();

  return (
    <div className={styles.container}>
      Hello world

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
