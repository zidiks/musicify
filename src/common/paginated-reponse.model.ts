import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaginatedResponse<T> {
    readonly items: T[];

    @Field(() => Int)
    readonly offset: number;

    @Field(() => Int)
    readonly limit: number;

    @Field(() => Int)
    readonly total: number;
}
