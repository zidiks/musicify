import { ArgsType, Field, Int } from "@nestjs/graphql";
import { QueryArgs } from "../../../common/query-args.dto";
import { IsOptional } from "class-validator";

@ArgsType()
export class GetAllTracksArgs extends QueryArgs {
    @IsOptional()
    @Field({ nullable: true })
    readonly albumId?: string;


    @IsOptional()
    @Field(() => Int, { nullable: true })
    readonly released?: number;
}
