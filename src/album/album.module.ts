import { Module } from '@nestjs/common';
import { AlbumResolver } from './album.resolver';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule,
  ],
  providers: [
      AlbumResolver,
  ]
})
export class AlbumModule {}
