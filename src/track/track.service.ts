import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { Observable } from "rxjs";
import { Track } from "./models/track.model";
import { MICROSERVICES } from "../common/paths.model";
import { UpdateTrackInput } from "./dto/input/update-track-input.dto";
import { CreateTrackInput } from "./dto/input/create-track-input.dto";
import { GetTrackArgs } from "./dto/args/get-track-args.dto";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { TrackResponse } from "./models/track-response.model";

@Injectable()
export class TrackService {
    constructor(private microservice: MicroserviceService) {}

    public getAllTracks(): Observable<PaginatedResponse<TrackResponse>> {
        return this.microservice.get<PaginatedResponse<TrackResponse>>(MICROSERVICES.TRACKS, '');
    }

    public deleteTrack(id: string, token: string): Observable<TrackResponse> {
        return this.microservice.delete<TrackResponse>(MICROSERVICES.TRACKS, `${id}`, token);
    }

    public updateTrack(updateTrackData: UpdateTrackInput, id: string, token: string): Observable<Track> {
        return this.microservice.put<Track, UpdateTrackInput>(MICROSERVICES.TRACKS, `${id}`, updateTrackData, token);
    }

    public createTrack(createTrackData: CreateTrackInput, token: string): Observable<Track> {
        return this.microservice.post<Track, CreateTrackInput>(MICROSERVICES.TRACKS, '', createTrackData, token);
    }

    public getTrack(getTrackArgs: GetTrackArgs): Observable<TrackResponse> {
        return this.microservice.get<TrackResponse>(MICROSERVICES.TRACKS, `${getTrackArgs.id}`);
    }
}
