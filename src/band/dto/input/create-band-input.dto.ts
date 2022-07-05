import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBandInput {
    @Field({ nullable: true })
    readonly name: string;

    @Field({ nullable: true })
    readonly origin: string;

    @Field({ nullable: true })
    readonly website: string;

    @Field(() => [String], { nullable: true })
    readonly genresIds: string[];
}
