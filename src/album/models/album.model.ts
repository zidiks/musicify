import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Artist } from "../../artist/models/artist.model";
import { Band } from "../../band/models/band.model";
import { Track } from "../../track/models/track.model";
import { Genre } from "../../genre/models/genre.model";
import { PaginatedResponse } from "../../common/paginated-reponse.model";

@ObjectType()
export class Album extends AbstractModel {
    @Field({ nullable: true })
    readonly name: string;

    @Field(() => Int, { nullable: true })
    readonly released: number;

    @Field(() => [Artist], { nullable: 'itemsAndList' })
    readonly artists: Artist[];

    @Field(() => [Band], { nullable: 'itemsAndList' })
    readonly bands: Band[];

    @Field(() => [Track], { nullable: 'itemsAndList' })
    readonly tracks: Track[];

    @Field(() => [Genre], { nullable: 'itemsAndList' })
    readonly genres: Genre[];

    @Field({ nullable: true })
    readonly image: string;
}

@ObjectType()
export class PaginatedAlbums extends PaginatedResponse<Album> {
    @Field(() => [Album], { nullable: 'items' })
    readonly items: Album[];
}
