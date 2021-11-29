import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Project } from './models/project.model';
@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async project(options: Prisma.ProjectsWhereUniqueInput): Promise<Project> {
    return this.prisma.projects.findUnique({
      where: options,
    });
  }
}
