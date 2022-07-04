import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";

@ObjectType()
export class Genre extends AbstractModel {
    @Field()
    readonly name: string;

    @Field()
    readonly description: string;

    @Field()
    readonly country: string;

    @Field(() => Int)
    readonly year: number;
}
