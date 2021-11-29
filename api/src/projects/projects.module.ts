import { Module } from '@nestjs/common';
import { ProjectsResolver } from './projects.resolver';
import { DateScalar } from '../common/scalars/date.scalar';

@Module({
  providers: [ProjectsResolver, DateScalar],
})
export class ProjectsModule {}
