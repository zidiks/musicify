import { ArgsType, Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { QueryArgs } from "../../../common/query-args.dto";

@ArgsType()
export class GetAllArtistsArgs extends QueryArgs {
    @IsOptional()
    @Field({ nullable: true })
    readonly firstName?: string;

    @IsOptional()
    @Field({ nullable: true })
    readonly secondName?: string;

    @IsOptional()
    @Field({ nullable: true })
    readonly middleName?: string;

    @IsOptional()
    @Field({ nullable: true })
    readonly birthDate?: string;

    @IsOptional()
    @Field({ nullable: true })
    readonly birthPlace?: string;

    @IsOptional()
    @Field({ nullable: true })
    readonly country?: string;

    @IsOptional()
    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly bandsIds?: string[];

    @IsOptional()
    @Field(() => [String], { nullable: 'itemsAndList' })
    readonly instruments?: string[];
}
