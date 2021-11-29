import { Resolver, Query, Args } from '@nestjs/graphql';
import { Project } from './models/project.model';
import { ProjectsService } from './projects.service';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => Project, { nullable: true })
  async project(@Args('id') id: number): Promise<Project | null> {
    return this.projectsService.project({ id });
  }
}
