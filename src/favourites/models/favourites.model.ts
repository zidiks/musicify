import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Band } from "../../band/models/band.model";
import { Genre } from "../../genre/models/genre.model";
import { Artist } from "../../artist/models/artist.model";
import { Track } from "../../track/models/track.model";

@ObjectType()
export class Favourites extends AbstractModel {
    @Field(() => ID, { nullable: true })
    readonly userId: string;

    @Field(() => [Band], { nullable: 'itemsAndList' })
    readonly bands: Band[];

    @Field(() => [Genre], { nullable: 'itemsAndList' })
    readonly genres: Genre[];

    @Field(() => [Artist], { nullable: 'itemsAndList' })
    readonly artists: Artist[];

    @Field(() => [Track], { nullable: 'itemsAndList' })
    readonly tracks: Track[];
}
