import { Injectable } from '@nestjs/common';
import { CreateUserInput } from "./dto/input/create-user-input.dto";
import { GetUserArgs } from "./dto/args/get-user-args.dto";
import { GetJwtArgs } from "./dto/args/get-jwt-args.dto";
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { MICROSERVICES } from "../common/paths.model";
import { Jwt } from "./models/jwt.model";
import { User } from "./models/user.model";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    constructor(private microservice: MicroserviceService) {
    }

    createUser(createUserData: CreateUserInput): Observable<User> {
        return this.microservice.post<User, CreateUserInput>(MICROSERVICES.USERS, 'register', createUserData);
    };

    getUser(getUserArgs: GetUserArgs) {};

    getJwt(getJwtArgs: GetJwtArgs): Observable<Jwt> {
        return this.microservice.post<Jwt, GetJwtArgs>(MICROSERVICES.USERS, 'login', getJwtArgs);
    };
}
