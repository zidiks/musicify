import { Injectable } from '@nestjs/common';
import { CreateUserInput } from "./dto/input/create-user-input.dto";
import { GetUserArgs } from "./dto/args/get-user-args.dto";
import { GetJwtArgs } from "./dto/args/get-jwt-args.dto";
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { MICROSERVICES } from "../common/paths.model";
import { Jwt } from "./models/jwt.model";
import { Observable } from "rxjs";
import { UserResponse } from "./models/user-response.model";

@Injectable()
export class UserService {
    constructor(private microservice: MicroserviceService) {}

    public createUser(createUserData: CreateUserInput): Observable<UserResponse> {
        return this.microservice.post<UserResponse, CreateUserInput>(MICROSERVICES.USERS, 'register', createUserData);
    };

    public getUser(getUserArgs: GetUserArgs): Observable<UserResponse> {
        return this.microservice.get<UserResponse>(MICROSERVICES.USERS, `${getUserArgs.id}`);
    };

    public getJwt(getJwtArgs: GetJwtArgs): Observable<Jwt> {
        return this.microservice.post<Jwt, GetJwtArgs>(MICROSERVICES.USERS, 'login', getJwtArgs);
    };
}
