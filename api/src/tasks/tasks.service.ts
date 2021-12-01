import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from './tasks.models/Task.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findMany(options: Prisma.TasksWhereInput): Promise<Task[]> {
    return this.prisma.tasks.findMany({
      where: options,
    });
  }
}
