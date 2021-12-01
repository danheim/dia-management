import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Task } from '../../tasks/tasks.models/Task.model';

@ObjectType({ description: 'project' })
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  startDate: Date;

  @Field(() => [Task])
  tasks?: Task[];
}
