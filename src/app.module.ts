import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { DependencyServiceModule } from "./utils/dependency-service-module/dependency-service-module";
import { ContextModel } from "./common/context.model";
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { BandModule } from './band/band.module';
import { GenreModule } from './genre/genre.module';
import { FavouritesModule } from './favourites/favourites.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true,
          context: ({req}): ContextModel => ({ jwt: req.headers.authorization || '' }),
      }),
      ConfigModule.forRoot(),
      DependencyServiceModule,
      UserModule,
      TrackModule,
      ArtistModule,
      BandModule,
      GenreModule,
      FavouritesModule,
      AlbumModule,
  ],
})
export class AppModule {}
