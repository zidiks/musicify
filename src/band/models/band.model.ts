import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Genre } from "../../genre/models/genre.model";
import { Member } from "../../member/models/member.model";

@ObjectType()
export class Band extends AbstractModel {
    @Field()
    readonly name: string;

    @Field()
    readonly origin: string;

    @Field(() => [Member])
    readonly members: Member[];

    @Field()
    readonly website: string;

    @Field(() => [Genre])
    readonly genres: Genre[];
}
