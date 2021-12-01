import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../users/users.models/User.model';
import { AuthService } from './auth.service';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards/graphql.guard';
import { CurrentUser } from '../common/decorators/currentUser.decorator';
import { UsersService } from '../users/users.service';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Query(() => User, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async authUser(@CurrentUser() user: User) {
    return this.userService.find(user.username);
  }

  @Mutation(() => User)
  async signIn(
    @Args({ name: 'username', type: () => String }) username: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ) {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new NotFoundException();
    }

    return this.authService.signIn(user);
  }
}
