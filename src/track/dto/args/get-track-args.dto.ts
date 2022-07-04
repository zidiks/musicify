import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetTrackArgs {
    @Field()
    id: string;
}
