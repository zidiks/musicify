import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateArtistInput {
    @Field({ nullable: true })
    readonly firstName?: string;

    @Field({ nullable: true })
    readonly secondName?: string;

    @Field({ nullable: true })
    readonly middleName?: string;

    @Field({ nullable: true })
    readonly birthDate?: string;

    @Field({ nullable: true })
    readonly birthPlace?: string;

    @Field({ nullable: true })
    readonly country?: string;

    @Field(() => [String], { nullable: true })
    readonly bandsIds?: string[];

    @Field(() => [String], { nullable: true })
    readonly instruments?: string[];
}
