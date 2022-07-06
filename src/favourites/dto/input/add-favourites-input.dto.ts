import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddFavouritesInput {
    @Field()
    readonly id: string;
}
