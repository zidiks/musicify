import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { DependencyServiceModule } from "./utils/dependency-service-module/dependency-service-module";
import { ContextModel } from "./common/context.model";

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true,
          context: ({req}): ContextModel => ({ jwt: req.headers.authorization || '' }),
      }),
      ConfigModule.forRoot(),
      UserModule,
      DependencyServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
