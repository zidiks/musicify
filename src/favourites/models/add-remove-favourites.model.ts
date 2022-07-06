import { EntityType } from "../../common/entities-types.model";

export interface AddRemoveFavourites {
    readonly type: EntityType;
    readonly id: string;
}
