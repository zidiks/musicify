import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule
  ],
  providers: [
      FavouritesService,
      FavouritesResolver
  ]
})
export class FavouritesModule {}
