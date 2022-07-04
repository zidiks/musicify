import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";

@ObjectType()
export class User extends AbstractModel {
    @Field()
    readonly email: string;

    @Field({ nullable: true })
    readonly firstName: string;

    @Field({ nullable: true })
    readonly lastName: string;

    @Field({ nullable: true })
    readonly password: string;
}
