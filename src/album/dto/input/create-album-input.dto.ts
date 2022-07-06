import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateAlbumInput {
    @Field({ nullable: true })
    readonly name?: string;

    @Field(() => Int,{ nullable: true })
    readonly released?: number;

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly artistsIds?: string[]

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly bandsIds?: string[];

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly trackIds?: string[];

    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly genresIds?: string[];

    @Field({ nullable: true })
    readonly image?: string;
}
