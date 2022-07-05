import { Module } from "@nestjs/common";
import { MicroserviceService } from "../microservice/microservice.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { GenreService } from "../../genre/genre.service";
import { BandService } from "../../band/band.service";
import { BandResolver } from "../../band/band.resolver";
import { GenreResolver } from "../../genre/genre.resolver";

@Module({
    imports: [
        HttpModule,
        ConfigModule,
    ],
    providers: [
        MicroserviceService,
        GenreService,
        GenreResolver,
        BandService,
        BandResolver,
    ],
    exports: [
        MicroserviceService,
        GenreService,
        GenreResolver,
        BandService,
        BandResolver,
    ]
})
export class DependencyServiceModule {}
