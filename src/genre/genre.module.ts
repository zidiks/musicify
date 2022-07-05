import { Module } from '@nestjs/common';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";

@Module({
  imports: [
      DependencyServiceModule,
  ],
})
export class GenreModule {}
