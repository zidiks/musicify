import { Module } from '@nestjs/common';
import { TrackResolver } from './track.resolver';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule
  ],
  providers: [
      TrackResolver,
  ]
})
export class TrackModule {}
