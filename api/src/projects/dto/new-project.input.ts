import { Field, InputType } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class NewProjectInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @Length(15, 255)
  description: string;
}
