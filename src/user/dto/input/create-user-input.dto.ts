import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;
}
