import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Album } from "../../album/models/album.model";
import { Band } from "../../band/models/band.model";
import { Genre } from "../../genre/models/genre.model";
import { PaginatedResponse } from "../../common/paginated-reponse.model";
import { Artist } from "../../artist/models/artist.model";

@ObjectType()
export class Track extends AbstractModel {
    @Field()
    readonly title!: string;

    @Field(() => Album, { nullable: true })
    readonly album?: Album;

    @Field(() => [Artist], { nullable: 'itemsAndList' })
    readonly artists?: Artist[];

    @Field(() => [Band], { nullable: 'itemsAndList' })
    readonly bands?: string[];

    @Field(() => Int, { nullable: true })
    readonly duration?: number;

    @Field(() => Int, { nullable: true })
    readonly released?: number;

    @Field(() => [Genre], { nullable: 'itemsAndList' })
    readonly genres?: Genre[];
}

@ObjectType()
export class PaginatedTracks extends PaginatedResponse<Track> {
    @Field(() => [Track], { nullable: 'items' })
    readonly items: Track[];
}
