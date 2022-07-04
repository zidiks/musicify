import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateGenreInput {
    @Field()
    readonly name: string;

    @Field()
    readonly description: string;

    @Field()
    readonly country: string;

    @Field()
    readonly year: number;
}
