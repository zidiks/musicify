import { Module } from '@nestjs/common';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";
import { GenreResolver } from "./genre.resolver";

@Module({
    imports: [
        DependencyServiceModule,
    ],
    providers: [
        GenreResolver
    ]
})
export class GenreModule {}
