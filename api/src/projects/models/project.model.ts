import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'project' })
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  startDate?: Date;

  @Field()
  creationDate: Date;

  @Field()
  releaseDate: Date;
}
