import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Band } from "../../band/models/band.model";
import { Genre } from "../../genre/models/genre.model";
import { Artist } from "../../artist/models/artist.model";
import { Track } from "../../track/models/track.model";

@ObjectType()
export class Favourites extends AbstractModel {
    @Field(() => ID)
    readonly userId: string;

    @Field()
    readonly bands: Band[];

    @Field()
    readonly genres: Genre[];

    @Field()
    readonly artists: Artist[];

    @Field()
    readonly tracks: Track[];
}
