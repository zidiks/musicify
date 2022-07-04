import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTrackInput {
    @Field()
    readonly title: string;

    @Field()
    readonly albumId: string;

    @Field()
    readonly bandsIds: string[];

    @Field()
    readonly duration: number;

    @Field()
    readonly released: number;

    @Field()
    readonly genresIds: string[];
}
