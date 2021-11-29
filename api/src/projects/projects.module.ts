import { Module } from '@nestjs/common';
import { ProjectsResolver } from './projects.resolver';
import { DateScalar } from '../common/scalars/date.scalar';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ProjectsResolver, ProjectsService, DateScalar, PrismaService],
})
export class ProjectsModule {}
