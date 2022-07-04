import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DeleteResponse {
    @Field()
    acknowledged: boolean;

    @Field(() => Int)
    deletedCount: number;
}
