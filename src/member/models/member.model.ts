import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Member {
    @Field()
    name: string;
}
