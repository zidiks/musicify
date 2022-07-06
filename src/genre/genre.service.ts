import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { Observable } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { GenreResponse } from "./models/genre-response.model";
import { MICROSERVICES } from "../common/paths.model";
import { UpdateGenreInput } from "./dto/input/update-genre-input.dto";
import { CreateGenreInput } from "./dto/input/create-genre-input.dto";
import { DeleteResponse } from "../common/delete-response.model";
import { GetAllGenresArgs } from "./dto/args/get-all-genres-args.dto";
import { DeleteArgs } from "../common/delete-args.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";

@Injectable()
export class GenreService {
    constructor(private microservice: MicroserviceService) {}

    public getAllGenres(getAllGenresArgs: GetAllGenresArgs): Observable<PaginatedResponse<GenreResponse>> {
        return this.microservice.get<PaginatedResponse<GenreResponse>>(MICROSERVICES.GENRES, '', getAllGenresArgs);
    }

    public deleteGenre(deleteGenreArgs: DeleteArgs, token: string): Observable<DeleteResponse> {
        return this.microservice.delete<DeleteResponse>(MICROSERVICES.GENRES, `${deleteGenreArgs.id}`, token);
    }

    public updateGenre(updateGenreInput: UpdateGenreInput, token: string): Observable<GenreResponse> {
        return this.microservice.put<GenreResponse, UpdateGenreInput>(MICROSERVICES.GENRES, `${updateGenreInput.id}`, updateGenreInput, token);
    }

    public createGenre(createGenreInput: CreateGenreInput, token: string): Observable<GenreResponse> {
        return this.microservice.post<GenreResponse, CreateGenreInput>(MICROSERVICES.GENRES, '', createGenreInput, token);
    }

    public getGenre(getGenreArgs: GetByIdArgs): Observable<GenreResponse> {
        return this.microservice.get<GenreResponse>(MICROSERVICES.GENRES, `${getGenreArgs.id}`);
    }
}
