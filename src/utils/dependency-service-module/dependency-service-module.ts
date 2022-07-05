import { Module } from "@nestjs/common";
import { MicroserviceService } from "../microservice/microservice.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { GenreService } from "../../genre/genre.service";
import { BandService } from "../../band/band.service";

@Module({
    imports: [
        HttpModule,
        ConfigModule,
    ],
    providers: [
        MicroserviceService,
        GenreService,
        BandService,
    ],
    exports: [
        MicroserviceService,
        GenreService,
        BandService,
    ]
})
export class DependencyServiceModule {}
