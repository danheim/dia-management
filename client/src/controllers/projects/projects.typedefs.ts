import { Task } from '@/controllers/tasks/tasks.typedefs';

export interface Project {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  tasks: Task[]
}
