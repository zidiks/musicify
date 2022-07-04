import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ArgsType()
export class QueryArgs {
    @IsOptional()
    @Field(() => Int, { nullable: true })
    readonly limit?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    readonly offset?: number = 0;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    readonly ids?: string[];
}
