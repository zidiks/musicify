import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { Observable } from "rxjs";
import { FavouritesResponse } from "./models/favourites-response.model";
import { MICROSERVICES } from "../common/paths.model";
import { AddRemoveFavourites } from "./models/add-remove-favourites.model";

@Injectable()
export class FavouritesService {
    constructor(private microservice: MicroserviceService) {}

    getFavourites(token: string): Observable<FavouritesResponse> {
        return this.microservice.get<FavouritesResponse>(MICROSERVICES.FAVOURITES, '', {}, token);
    }

    remove(removeFavouritesData: AddRemoveFavourites, token: string): Observable<FavouritesResponse> {
        return this.microservice.put<FavouritesResponse, AddRemoveFavourites>(MICROSERVICES.FAVOURITES, 'remove', removeFavouritesData, token);
    }

    add(addFavouritesData: AddRemoveFavourites, token: string): Observable<FavouritesResponse> {
        return this.microservice.put<FavouritesResponse, AddRemoveFavourites>(MICROSERVICES.FAVOURITES, 'add', addFavouritesData, token);
    }
}
