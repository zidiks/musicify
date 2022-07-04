import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateTrackInput {
    @Field()
    _id: string;

    @Field()
    readonly title: string;

    @Field()
    readonly albumId: string;

    @Field()
    readonly bandsIds: string[];

    @Field()
    readonly genresIds: string[];
}
