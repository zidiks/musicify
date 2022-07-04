import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateGenreInput {
    @Field()
    id?: string;

    @Field()
    readonly name: string;

    @Field()
    readonly description: string;

    @Field()
    readonly country: string;

    @Field()
    readonly year: number;
}
