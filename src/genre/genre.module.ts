import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule,
  ],
  providers: [
      GenreService,
      GenreResolver,
  ]
})
export class GenreModule {}
