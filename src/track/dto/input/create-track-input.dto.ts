import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateTrackInput {
    @Field({ nullable: true })
    readonly title?: string;

    @Field({ nullable: true })
    readonly albumId?: string;

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly artistsIds?: string[]

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly bandsIds?: string[];

    @Field(() => Int, { nullable: true })
    readonly duration?: number;

    @Field(() => Int,{ nullable: true })
    readonly released?: number;

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly genresIds?: string[];
}
