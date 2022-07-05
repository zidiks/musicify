import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateTrackInput {
    @Field()
    id: string;

    @Field({ nullable: true })
    readonly title?: string;

    @Field({ nullable: true })
    readonly albumId?: string;

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly artistsIds?: string[]

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly bandsIds?: string[];

    @Field({ nullable: true })
    readonly duration?: number;

    @Field({ nullable: true })
    readonly released?: number;

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly genresIds?: string[];
}
