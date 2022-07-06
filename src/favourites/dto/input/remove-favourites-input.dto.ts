import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RemoveFavouritesInput {
    @Field()
    readonly id: string;
}
