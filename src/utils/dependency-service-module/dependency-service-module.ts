import { Module } from "@nestjs/common";
import { MicroserviceService } from "../microservice/microservice.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        HttpModule,
        ConfigModule
    ],
    providers: [MicroserviceService],
    exports: [MicroserviceService]
})
export class DependencyServiceModule {}
