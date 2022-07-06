import { ArgsType, Field, Int } from "@nestjs/graphql";
import { QueryArgs } from "../../../common/query-args.dto";
import { IsOptional } from "class-validator";

@ArgsType()
export class GetAllAlbumsArgs extends QueryArgs {
    @IsOptional()
    @Field(() => Int, { nullable: true })
    readonly released?: number;
}
