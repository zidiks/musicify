import { ArgsType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@ArgsType()
export class GetJwtArgs {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    password: string;
}
