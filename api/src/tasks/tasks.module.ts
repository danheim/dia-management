import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  exports: [TasksService],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
