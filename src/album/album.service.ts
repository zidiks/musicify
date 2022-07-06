import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { Observable } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { MICROSERVICES } from "../common/paths.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { DeleteResponse } from "../common/delete-response.model";
import { GetByIdArgs } from "../common/get-by-id-args.dto";
import { GetAllAlbumsArgs } from "./dto/args/get-all-albums-args.dto";
import { AlbumResponse } from "./models/album-response.model";
import { UpdateAlbumInput } from "./dto/input/update-album-input.dto";
import { CreateAlbumInput } from "./dto/input/create-album-input.dto";

@Injectable()
export class AlbumService {
    constructor(private microservice: MicroserviceService) {}

    public getAllAlbums(getAllAlbumsArgs: GetAllAlbumsArgs): Observable<PaginatedResponse<AlbumResponse>> {
        return this.microservice.get<PaginatedResponse<AlbumResponse>>(MICROSERVICES.ALBUMS, '', getAllAlbumsArgs);
    }

    public deleteAlbum(deleteAlbumArgs: DeleteArgs, token: string): Observable<DeleteResponse> {
        return this.microservice.delete<DeleteResponse>(MICROSERVICES.ALBUMS, `${deleteAlbumArgs.id}`, token);
    }

    public updateAlbum(updateAlbumData: UpdateAlbumInput, token: string): Observable<AlbumResponse> {
        return this.microservice.put<AlbumResponse, UpdateAlbumInput>(MICROSERVICES.ALBUMS, `${updateAlbumData.id}`, updateAlbumData, token);
    }

    public createAlbum(createAlbumData: CreateAlbumInput, token: string): Observable<AlbumResponse> {
        return this.microservice.post<AlbumResponse, CreateAlbumInput>(MICROSERVICES.ALBUMS, '', createAlbumData, token);
    }

    public getAlbum(getAlbumArgs: GetByIdArgs): Observable<AlbumResponse> {
        return this.microservice.get<AlbumResponse>(MICROSERVICES.ALBUMS, `${getAlbumArgs.id}`);
    }
}
