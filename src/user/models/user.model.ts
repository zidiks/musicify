import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";

@ObjectType()
export class User extends AbstractModel {
    @Field()
    readonly email: string;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field()
    readonly password: string;
}
