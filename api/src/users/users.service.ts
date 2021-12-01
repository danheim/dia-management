import { Injectable } from '@nestjs/common';
import { User } from './users.models/User.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async find(username: string): Promise<User | null> {
    return this.prisma.users.findFirst({
      where: { username },
    });
  }
}
