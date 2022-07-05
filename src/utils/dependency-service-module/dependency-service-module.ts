import { Module, Provider } from "@nestjs/common";
import { MicroserviceService } from "../microservice/microservice.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { GenreService } from "../../genre/genre.service";
import { BandService } from "../../band/band.service";
import { ArtistService } from "../../artist/artist.service";

const PROVIDERS: Provider[] = [
    MicroserviceService,
    GenreService,
    BandService,
    ArtistService,
];

@Module({
    imports: [
        HttpModule,
        ConfigModule,
    ],
    providers: [
        ...PROVIDERS,
    ],
    exports: [
        ...PROVIDERS,
    ]
})
export class DependencyServiceModule {}
