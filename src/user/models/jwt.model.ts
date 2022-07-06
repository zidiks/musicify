import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Jwt {
    @Field()
    readonly jwt: string;
}
