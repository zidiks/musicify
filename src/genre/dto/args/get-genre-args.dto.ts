import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetGenreArgs {
    @Field()
    id: string;
}
