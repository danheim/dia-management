import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: process.env.NODE_ENV === 'development',
      playground: process.env.NODE_ENV === 'development',
    }),
    AuthModule,
    ProjectsModule,
    UsersModule,
  ],
})
export class AppModule {}
