import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { DependencyServiceModule } from "./utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true,
      }),
      ConfigModule.forRoot(),
      UserModule,
      DependencyServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
