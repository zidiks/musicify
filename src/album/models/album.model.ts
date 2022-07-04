import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Artist } from "../../artist/models/artist.model";
import { Band } from "../../band/models/band.model";
import { Track } from "../../track/models/track.model";
import { Genre } from "../../genre/models/genre.model";

@ObjectType()
export class Album extends AbstractModel {
    @Field()
    readonly name: string;

    @Field(() => Int)
    readonly released: number;

    @Field(() => [Artist])
    readonly artists: Artist[];

    @Field(() => [Band])
    readonly bands: Band[];

    @Field(() => [Track])
    readonly tracks: Track[];

    @Field(() => [Genre])
    readonly genres: Genre[];

    @Field()
    readonly image: string;
}
