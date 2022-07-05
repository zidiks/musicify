import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { QueryArgs } from "../../../common/query-args.dto";

@ArgsType()
export class GetAllGenresArgs extends QueryArgs {
    @IsOptional()
    @Field({ nullable: true })
    readonly country: string;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    readonly year: number;
}
