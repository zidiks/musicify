import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Member {
    @Field()
    readonly artist: string;

    @Field()
    readonly instrument: string;

    @Field(() => [String])
    readonly years: string[];
}
