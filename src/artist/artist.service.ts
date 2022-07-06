import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { Observable } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { MICROSERVICES } from "../common/paths.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { DeleteResponse } from "../common/delete-response.model";
import { GetByIdArgs } from "../common/get-by-id-args.dto";
import { GetAllArtistsArgs } from "./dto/args/get-all-artists-args.dto";
import { ArtistResponse } from "./models/artist-response.model";
import { UpdateArtistInput } from "./dto/input/update-artist-input.dto";
import { CreateArtistInput } from "./dto/input/create-artist-input.dto";

@Injectable()
export class ArtistService {
    constructor(private microservice: MicroserviceService) {}

    public getAllArtists(getAllArtistsArgs: GetAllArtistsArgs): Observable<PaginatedResponse<ArtistResponse>> {
        return this.microservice.get<PaginatedResponse<ArtistResponse>>(MICROSERVICES.ARTISTS, '', getAllArtistsArgs);
    }

    public deleteArtist(deleteArtistArgs: DeleteArgs, token: string): Observable<DeleteResponse> {
        return this.microservice.delete<DeleteResponse>(MICROSERVICES.ARTISTS, `${deleteArtistArgs.id}`, token);
    }

    public updateArtist(updateArtistInput: UpdateArtistInput, token: string): Observable<ArtistResponse> {
        return this.microservice.put<ArtistResponse, UpdateArtistInput>(MICROSERVICES.ARTISTS, `${updateArtistInput.id}`, updateArtistInput, token);
    }

    public createArtist(createArtistInput: CreateArtistInput, token: string): Observable<ArtistResponse> {
        return this.microservice.post<ArtistResponse, CreateArtistInput>(MICROSERVICES.ARTISTS, '', createArtistInput, token);
    }

    public getArtist(getArtistArgs: GetByIdArgs): Observable<ArtistResponse> {
        return this.microservice.get<ArtistResponse>(MICROSERVICES.ARTISTS, `${getArtistArgs.id}`);
    }
}
