import { Module } from '@nestjs/common';
import { TrackResolver } from './track.resolver';
import { TrackService } from './track.service';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule
  ],
  providers: [
      TrackResolver,
      TrackService,
  ]
})
export class TrackModule {}
