import { Args, Context, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Favourites } from "./models/favourites.model";
import { TrackService } from "../track/track.service";
import { BandService } from "../band/band.service";
import { ArtistService } from "../artist/artist.service";
import { GenreService } from "../genre/genre.service";
import { ContextModel } from "../common/context.model";
import { AddFavouritesInput } from "./dto/input/add-favourites-input.dto";
import { FavouritesService } from "./favourites.service";
import { EntityType } from "../common/entities-types.model";
import { RemoveFavouritesInput } from "./dto/input/remove-favourites-input.dto";
import { TrackResponse } from "../track/models/track-response.model";
import { Artist } from "../artist/models/artist.model";
import { map } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { ArtistResponse } from "../artist/models/artist-response.model";
import { Band } from "../band/models/band.model";
import { BandResponse } from "../band/models/band-response.model";
import { Genre } from "../genre/models/genre.model";
import { GenreResponse } from "../genre/models/genre-response.model";
import { FavouritesResponse } from "./models/favourites-response.model";
import { Track } from "../track/models/track.model";

@Resolver(() => Favourites)
export class FavouritesResolver {
    constructor(
        private readonly favouritesService: FavouritesService,
        private readonly trackService: TrackService,
        private readonly bandService: BandService,
        private readonly artistService: ArtistService,
        private readonly genreService: GenreService,
    ) {}

    @Mutation(() => Favourites, { name: 'addTrackToFavourites' })
    async addTrackToFavourites(@Args('addTrackToFavouritesData') addTrackToFavouritesData: AddFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.add({ ...addTrackToFavouritesData, type: EntityType.TRACKS }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'removeTrackFromFavourites' })
    async removeTrackFromFavourites(@Args('removeTrackFromFavouritesData') removeTrackFromFavouritesData: RemoveFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.remove({ ...removeTrackFromFavouritesData, type: EntityType.TRACKS }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'addBandToFavourites' })
    async addBandToFavourites(@Args('addBandToFavouritesData') addBandToFavouritesData: AddFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.add({ ...addBandToFavouritesData, type: EntityType.BANDS }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'removeBandFromFavourites' })
    async removeBandFromFavourites(@Args('removeBandFromFavouritesData') removeBandFromFavouritesData: RemoveFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.remove({ ...removeBandFromFavouritesData, type: EntityType.BANDS }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'addArtistToFavourites' })
    async addArtistToFavourites(@Args('addArtistToFavouritesData') addArtistToFavouritesData: AddFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.add({ ...addArtistToFavouritesData, type: EntityType.ARTISTS }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'removeArtistFromFavourites' })
    async removeArtistFromFavourites(@Args('removeArtistFromFavouritesData') removeArtistFromFavouritesData: RemoveFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.remove({ ...removeArtistFromFavouritesData, type: EntityType.ARTISTS }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'addGenreToFavourites' })
    async addGenreToFavourites(@Args('addGenreToFavouritesData') addGenreToFavouritesData: AddFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.add({ ...addGenreToFavouritesData, type: EntityType.GENRES }, context.jwt);
    }

    @Mutation(() => Favourites, { name: 'removeGenreFromFavourites' })
    async removeGenreFromFavourites(@Args('removeGenreFromFavouritesData') removeGenreFromFavouritesData: RemoveFavouritesInput, @Context() context: ContextModel) {
        return this.favouritesService.remove({ ...removeGenreFromFavouritesData, type: EntityType.GENRES }, context.jwt);
    }

    @Query(() => Favourites, { name: 'favourites' })
    async getAllFavourites(@Context() context: ContextModel) {
        return this.favouritesService.getFavourites(context.jwt);
    }

    @ResolveField('id', () => ID)
    getId(@Parent() favourites: FavouritesResponse) {
        return favourites._id;
    }

    @ResolveField('artists', () => [Artist], { nullable: 'itemsAndList' })
    artists(@Parent() favourites: FavouritesResponse) {
        if (favourites.artistsIds?.length) {
            return  this.artistService.getAllArtists({
                ids: favourites.artistsIds
            }).pipe(map((res: PaginatedResponse<ArtistResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('bands', () => [Band], { nullable: 'itemsAndList' })
    bands(@Parent() favourites: FavouritesResponse) {
        if (favourites.bandsIds?.length) {
            return  this.bandService.getAllBands({
                ids: favourites.bandsIds
            }).pipe(map((res: PaginatedResponse<BandResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
    genres(@Parent() favourites: FavouritesResponse) {
        if (favourites.genresIds?.length) {
            return  this.genreService.getAllGenres({
                ids: favourites.genresIds
            }).pipe(map((res: PaginatedResponse<GenreResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('tracks', () => [Track], { nullable: 'itemsAndList' })
    tracks(@Parent() favourites: FavouritesResponse) {
        if (favourites.tracksIds?.length) {
            return  this.trackService.getAllTracks({
                ids: favourites.tracksIds
            }).pipe(map((res: PaginatedResponse<TrackResponse>) => res.items));
        } else {
            return [];
        }
    }
}
