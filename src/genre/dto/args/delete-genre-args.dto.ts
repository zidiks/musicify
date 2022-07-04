import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class DeleteGenreArgs {
    @Field()
    id: string;
}
