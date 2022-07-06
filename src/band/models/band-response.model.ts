import { Member } from "../../member/models/member.model";

export interface BandResponse {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}
