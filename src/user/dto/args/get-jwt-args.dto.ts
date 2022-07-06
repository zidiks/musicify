import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetJwtArgs {
    @Field()
    email: string;

    @Field()
    password: string;
}
