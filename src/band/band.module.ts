import { Module } from '@nestjs/common';
import { DependencyServiceModule } from "../utils/dependency-service-module/dependency-service-module";
import { BandResolver } from "./band.resolver";

@Module({
    imports: [
        DependencyServiceModule,
    ],
    providers: [
        BandResolver
    ]
})
export class BandModule {}
