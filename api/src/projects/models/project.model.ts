import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'project' })
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  creationDate: Date;

  @Field()
  releaseDate: Date;

  @Field({ nullable: true })
  description?: string;
}
