import { Module } from '@nestjs/common';
import { ProjectsResolver } from './projects.resolver';
import { DateScalar } from '../common/scalars/date.scalar';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../prisma/prisma.service';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  imports: [TasksModule],
  providers: [ProjectsResolver, ProjectsService, DateScalar, PrismaService],
})
export class ProjectsModule {}
