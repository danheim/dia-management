import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.models/User.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.find(username);

    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...fields } = user;

      return fields as User;
    }

    return null;
  }

  async signIn(user: User) {
    const payload = { username: user.username, sub: user.id };

    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
