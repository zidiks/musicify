import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { PaginatedResponse } from "../../common/paginated-reponse.model";

@ObjectType()
export class Genre extends AbstractModel {
    @Field({ nullable: true })
    readonly name: string;

    @Field({ nullable: true })
    readonly description: string;

    @Field({ nullable: true })
    readonly country: string;

    @Field(() => Int, { nullable: true })
    readonly year: number;
}

@ObjectType()
export class PaginatedGenres extends PaginatedResponse<Genre> {
    @Field(() => [Genre])
    readonly items: Genre[];
}
