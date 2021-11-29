import { Resolver, Query, Args } from '@nestjs/graphql';
import { Project } from './models/project.model';

@Resolver(() => Project)
export class ProjectsResolver {
  @Query(() => Project)
  async project(@Args('id') id: string): Promise<Project> {
    console.log(id);

    return new Project();
  }
}
