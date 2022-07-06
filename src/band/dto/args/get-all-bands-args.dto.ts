import { ArgsType, Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { QueryArgs } from "../../../common/query-args.dto";

@ArgsType()
export class GetAllBandsArgs extends QueryArgs {
    @IsOptional()
    @Field({ nullable: true })
    readonly origin?: string;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    readonly genresIds?: string[];
}
