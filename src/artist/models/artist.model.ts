import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../../common/abstract.model";
import { Band } from "../../band/models/band.model";

@ObjectType()
export class Artist extends AbstractModel {
    @Field()
    readonly firstName: string;

    @Field()
    readonly secondName: string;

    @Field()
    readonly middleName: string;

    @Field()
    readonly birthDate: string;

    @Field()
    readonly birthPlace: string;

    @Field()
    readonly country: string;

    @Field(() => [Band])
    readonly bands: Band[];

    @Field()
    readonly instruments: string;
}
