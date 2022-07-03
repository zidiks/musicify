import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetUserArgs {
    @Field()
    _id: string;
}
