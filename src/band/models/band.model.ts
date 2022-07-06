import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Genre } from "../../genre/models/genre.model";
import { Member } from "../../member/models/member.model";
import { PaginatedResponse } from "../../common/paginated-reponse.model";

@ObjectType()
export class Band extends AbstractModel {
    @Field({ nullable: true })
    readonly name: string;

    @Field({ nullable: true })
    readonly origin: string;

    @Field(() => [Member], { nullable: 'itemsAndList' })
    readonly members: Member[];

    @Field({ nullable: true })
    readonly website: string;

    @Field(() => [Genre], { nullable: 'itemsAndList' })
    readonly genres: Genre[];
}

@ObjectType()
export class PaginatedBands extends PaginatedResponse<Band> {
    @Field(() => [Band], { nullable: 'items' })
    readonly items: Band[];
}
