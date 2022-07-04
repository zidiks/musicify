export interface TrackResponse {
    _id: string;
    title: string;
    albumId: string;
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}
