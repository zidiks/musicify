import { Module } from '@nestjs/common';
import { ArtistResolver } from './artist.resolver';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule,
  ],
  providers: [
      ArtistResolver,
  ]
})
export class ArtistModule {}
