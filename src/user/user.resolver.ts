import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { CreateUserInput } from "./dto/input/create-user-input.dto";
import { GetUserArgs } from "./dto/args/get-user-args.dto";
import { Jwt } from "./models/jwt.model";
import { GetJwtArgs } from "./dto/args/get-jwt-args.dto";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => User, { name: 'register' })
    async createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.userService.createUser(createUserData);
    }

    @Query(() => User, { name: 'user' })
    async getUser(@Args() getUserArgs: GetUserArgs) {
        return this.userService.getUser(getUserArgs);
    }

    @Query(() => Jwt, { name: 'jwt' })
    async getJwt(@Args() getJwtArgs: GetJwtArgs) {
        return this.userService.getJwt(getJwtArgs);
    }
}
