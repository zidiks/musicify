import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Album } from "../../album/models/album.model";
import { Band } from "../../band/models/band.model";
import { Genre } from "../../genre/models/genre.model";
import { PaginatedResponse } from "../../common/paginated-reponse.model";

@ObjectType()
export class Track extends AbstractModel {
    @Field()
    readonly title!: string;

    @Field(() => [Album])
    readonly albums: string[];

    @Field(() => [Band])
    readonly bands: string[];

    @Field(() => Int)
    readonly duration: number;

    @Field(() => Int)
    readonly released: number;

    @Field(() => [Genre])
    readonly genres: string[];
}

@ObjectType()
export class PaginatedTracks extends PaginatedResponse<Track> {
    @Field(() => [Track])
    readonly items: Track[];
}
