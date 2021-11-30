import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Project } from './models/project.model';
import { ProjectsService } from './projects.service';
import { NewProjectInput } from './dto/new-project.input';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => Project, { nullable: true })
  async project(@Args('id') id: number): Promise<Project | null> {
    return this.projectsService.find({ id });
  }

  @Query(() => [Project])
  async projects(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Mutation(() => Project)
  async addProject(
    @Args('newProjectData') data: NewProjectInput,
  ): Promise<Project> {
    return this.projectsService.create(data);
  }
}
