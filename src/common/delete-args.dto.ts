import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class DeleteArgs {
    @Field()
    id: string;
}
