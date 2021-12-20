import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'task' })
export class Task {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  progress: number;

  @Field()
  projectId: number;
}
