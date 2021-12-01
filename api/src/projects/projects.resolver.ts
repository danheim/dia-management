import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Project } from './models/Project.model';
import { ProjectsService } from './projects.service';
import { NewProjectInput } from './dto/new-project.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards/graphql.guard';
import { TasksService } from '../tasks/tasks.service';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly tasksService: TasksService,
  ) {}

  @Query(() => [Project])
  @UseGuards(GqlAuthGuard)
  async projects(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Mutation(() => Project)
  @UseGuards(GqlAuthGuard)
  async addProject(
    @Args('newProjectData') data: NewProjectInput,
  ): Promise<Project> {
    return this.projectsService.create(data);
  }

  @ResolveField()
  async tasks(@Parent() project: Project) {
    return this.tasksService.findMany({
      projectId: project.id,
    });
  }
}
