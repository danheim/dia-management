import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  access_token?: string;
}
