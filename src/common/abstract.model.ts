import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class AbstractModel {
    @Field()
    readonly _is: string;
}
