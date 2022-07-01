import { Injectable } from '@nestjs/common';
import { CreateUserInput } from "./dto/input/create-user-input.dto";
import { GetUserArgs } from "./dto/args/get-user-args.dto";
import { GetJwtArgs } from "./dto/args/get-jwt-args.dto";
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { MICROSERVICES } from "../common/paths.model";
import { Jwt } from "./models/jwt.model";

@Injectable()
export class UserService {
    constructor(private microservice: MicroserviceService) {
    }

    async createUser(createUserData: CreateUserInput) {};

    async getUser(getUserArgs: GetUserArgs) {};

    async getJwt(getJwtArgs: GetJwtArgs) {
        return this.microservice.post<Jwt>(MICROSERVICES.USERS, 'login', getJwtArgs);
    };
}
