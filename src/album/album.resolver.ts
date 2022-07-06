import { Args, Context, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Album, PaginatedAlbums } from "./models/album.model";
import { TrackService } from "../track/track.service";
import { BandService } from "../band/band.service";
import { ArtistService } from "../artist/artist.service";
import { GenreService } from "../genre/genre.service";
import { ContextModel } from "../common/context.model";
import { DeleteResponse } from "../common/delete-response.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";
import { TrackResponse } from "../track/models/track-response.model";
import { Artist } from "../artist/models/artist.model";
import { map } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { ArtistResponse } from "../artist/models/artist-response.model";
import { Band } from "../band/models/band.model";
import { BandResponse } from "../band/models/band-response.model";
import { Genre } from "../genre/models/genre.model";
import { GenreResponse } from "../genre/models/genre-response.model";
import { AlbumService } from "./album.service";
import { CreateAlbumInput } from "./dto/input/create-album-input.dto";
import { UpdateAlbumInput } from "./dto/input/update-album-input.dto";
import { GetAllAlbumsArgs } from "./dto/args/get-all-albums-args.dto";
import { AlbumResponse } from "./models/album-response.model";
import { Track } from "../track/models/track.model";

@Resolver(() => Album)
export class AlbumResolver {
    constructor(
        private readonly albumService: AlbumService,
        private readonly trackService: TrackService,
        private readonly bandService: BandService,
        private readonly artistService: ArtistService,
        private readonly genreService: GenreService,
    ) {}

    @Mutation(() => Album, { name: 'createAlbum' })
    async createAlbum(@Args('createAlbumData') createAlbumData: CreateAlbumInput, @Context() context: ContextModel) {
        return this.albumService.createAlbum(createAlbumData, context.jwt);
    }

    @Mutation(() => DeleteResponse, { name: 'deleteAlbum' })
    async deleteAlbum(@Args() deleteAlbumData: DeleteArgs, @Context() context: ContextModel) {
        return this.albumService.deleteAlbum(deleteAlbumData, context.jwt);
    }

    @Mutation(() => Album, { name: 'updateAlbum' })
    async updateAlbum(@Args('updateAlbumData') updateAlbumData: UpdateAlbumInput, @Context() context: ContextModel) {
        return this.albumService.updateAlbum(updateAlbumData, context.jwt);
    }

    @Query(() => Album, { name: 'album' })
    async getAlbum(@Args() getAlbumArgs: GetByIdArgs) {
        return this.albumService.getAlbum(getAlbumArgs);
    }

    @Query(() => PaginatedAlbums, { name: 'albums' })
    async getAllAlbums(@Args() getAllAlbumsArgs: GetAllAlbumsArgs) {
        return this.albumService.getAllAlbums(getAllAlbumsArgs);
    }

    @ResolveField('id', () => ID)
    getId(@Parent() album: AlbumResponse) {
        return album._id;
    }

    @ResolveField('artists', () => [Artist], { nullable: 'itemsAndList' })
    artists(@Parent() album: AlbumResponse) {
        if (album.artistsIds?.length) {
            return  this.artistService.getAllArtists({
                ids: album.artistsIds
            }).pipe(map((res: PaginatedResponse<ArtistResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('bands', () => [Band], { nullable: 'itemsAndList' })
    bands(@Parent() album: AlbumResponse) {
        if (album.bandsIds?.length) {
            return  this.bandService.getAllBands({
                ids: album.bandsIds
            }).pipe(map((res: PaginatedResponse<BandResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('tracks', () => [Track], { nullable: 'itemsAndList' })
    tracks(@Parent() album: AlbumResponse) {
        if (album.trackIds?.length) {
            return  this.trackService.getAllTracks({
                ids: album.trackIds
            }).pipe(map((res: PaginatedResponse<TrackResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
    genres(@Parent() album: AlbumResponse) {
        if (album.genresIds?.length) {
            return  this.genreService.getAllGenres({
                ids: album.genresIds
            }).pipe(map((res: PaginatedResponse<GenreResponse>) => res.items));
        } else {
            return [];
        }
    }
}
