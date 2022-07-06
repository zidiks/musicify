import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Band } from "../../band/models/band.model";
import { PaginatedResponse } from "../../common/paginated-reponse.model";

@ObjectType()
export class Artist extends AbstractModel {
    @Field({ nullable: true })
    readonly firstName: string;

    @Field({ nullable: true })
    readonly secondName: string;

    @Field({ nullable: true })
    readonly middleName: string;

    @Field({ nullable: true })
    readonly birthDate: string;

    @Field({ nullable: true })
    readonly birthPlace: string;

    @Field({ nullable: true })
    readonly country: string;

    @Field(() => [Band], { nullable: 'itemsAndList' })
    readonly bands: Band[];

    @Field(() => [String], { nullable: true })
    readonly instruments: string[];
}

@ObjectType()
export class PaginatedArtists extends PaginatedResponse<Artist> {
    @Field(() => [Artist], { nullable: 'items' })
    readonly items: Artist[];
}
