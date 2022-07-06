import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { Observable } from "rxjs";
import { MICROSERVICES } from "../common/paths.model";
import { UpdateTrackInput } from "./dto/input/update-track-input.dto";
import { CreateTrackInput } from "./dto/input/create-track-input.dto";
import { GetAllTracksArgs } from "./dto/args/get-all-tracks-args.dto";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { TrackResponse } from "./models/track-response.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { DeleteResponse } from "../common/delete-response.model";
import { GetByIdArgs } from "../common/get-by-id-args.dto";

@Injectable()
export class TrackService {
    constructor(private microservice: MicroserviceService) {}

    public getAllTracks(getAllTracksArgs: GetAllTracksArgs): Observable<PaginatedResponse<TrackResponse>> {
        return this.microservice.get<PaginatedResponse<TrackResponse>>(MICROSERVICES.TRACKS, '', getAllTracksArgs);
    }

    public deleteTrack(deleteTrackArgs: DeleteArgs, token: string): Observable<DeleteResponse> {
        return this.microservice.delete<DeleteResponse>(MICROSERVICES.TRACKS, `${deleteTrackArgs.id}`, token);
    }

    public updateTrack(updateTrackData: UpdateTrackInput, token: string): Observable<TrackResponse> {
        return this.microservice.put<TrackResponse, UpdateTrackInput>(MICROSERVICES.TRACKS, `${updateTrackData.id}`, updateTrackData, token);
    }

    public createTrack(createTrackData: CreateTrackInput, token: string): Observable<TrackResponse> {
        return this.microservice.post<TrackResponse, CreateTrackInput>(MICROSERVICES.TRACKS, '', createTrackData, token);
    }

    public getTrack(getTrackArgs: GetByIdArgs): Observable<TrackResponse> {
        return this.microservice.get<TrackResponse>(MICROSERVICES.TRACKS, `${getTrackArgs.id}`);
    }
}
