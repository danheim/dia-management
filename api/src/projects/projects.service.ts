import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Project } from './models/Project.model';
import { NewProjectInput } from './dto/new-project.input';
@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async find(
    options: Prisma.ProjectsWhereUniqueInput,
  ): Promise<Project | null> {
    return this.prisma.projects.findUnique({
      where: options,
    });
  }

  async findAll(): Promise<Project[]> {
    return this.prisma.projects.findMany();
  }

  async create(data: NewProjectInput): Promise<Project> {
    return this.prisma.projects.create({ data });
  }
}
