import { Args, Context, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TrackService } from "./track.service";
import { PaginatedTracks, Track } from "./models/track.model";
import { TrackResponse } from "./models/track-response.model";
import { BandService } from "../band/band.service";
import { ArtistService } from "../artist/artist.service";
import { GenreService } from "../genre/genre.service";
import { ContextModel } from "../common/context.model";
import { DeleteResponse } from "../common/delete-response.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";
import { CreateTrackInput } from "./dto/input/create-track-input.dto";
import { UpdateTrackInput } from "./dto/input/update-track-input.dto";
import { GetAllTracksArgs } from "./dto/args/get-all-tracks-args.dto";
import { map } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { Artist } from "../artist/models/artist.model";
import { ArtistResponse } from "../artist/models/artist-response.model";
import { Band } from "../band/models/band.model";
import { BandResponse } from "../band/models/band-response.model";
import { Genre } from "../genre/models/genre.model";
import { GenreResponse } from "../genre/models/genre-response.model";
import { Album } from "../album/models/album.model";
import { AlbumService } from "../album/album.service";

@Resolver(() => Track)
export class TrackResolver {
    constructor(
        private readonly trackService: TrackService,
        private readonly bandService: BandService,
        private readonly artistService: ArtistService,
        private readonly genreService: GenreService,
        private readonly albumService: AlbumService,
    ) {}

    @Mutation(() => Track, { name: 'createTrack' })
    async createTrack(@Args('createTrackData') createTrackData: CreateTrackInput, @Context() context: ContextModel) {
        return this.trackService.createTrack(createTrackData, context.jwt);
    }

    @Mutation(() => DeleteResponse, { name: 'deleteTrack' })
    async deleteTrack(@Args() deleteTrackData: DeleteArgs, @Context() context: ContextModel) {
        return this.trackService.deleteTrack(deleteTrackData, context.jwt);
    }

    @Mutation(() => Track, { name: 'updateTrack' })
    async updateTrack(@Args('updateTrackData') updateTrackData: UpdateTrackInput, @Context() context: ContextModel) {
        return this.trackService.updateTrack(updateTrackData, context.jwt);
    }

    @Query(() => Track, { name: 'track' })
    async getTrack(@Args() getTrackArgs: GetByIdArgs) {
        return this.trackService.getTrack(getTrackArgs);
    }

    @Query(() => PaginatedTracks, { name: 'tracks' })
    async getAllTracks(@Args() getAllTracksArgs: GetAllTracksArgs) {
        return this.trackService.getAllTracks(getAllTracksArgs);
    }

    @ResolveField('id', () => ID)
    getId(@Parent() track: TrackResponse) {
        return track._id;
    }

    @ResolveField('artists', () => [Artist], { nullable: 'itemsAndList' })
    artists(@Parent() track: TrackResponse) {
        if (track.artistsIds?.length) {
            return  this.artistService.getAllArtists({
                ids: track.artistsIds
            }).pipe(map((res: PaginatedResponse<ArtistResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('bands', () => [Band], { nullable: 'itemsAndList' })
    bands(@Parent() track: TrackResponse) {
        if (track.bandsIds?.length) {
            return  this.bandService.getAllBands({
                ids: track.bandsIds
            }).pipe(map((res: PaginatedResponse<BandResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
    genres(@Parent() track: TrackResponse) {
        if (track.genresIds?.length) {
            return  this.genreService.getAllGenres({
                ids: track.genresIds
            }).pipe(map((res: PaginatedResponse<GenreResponse>) => res.items));
        } else {
            return [];
        }
    }

    @ResolveField('album', () => Album, { nullable: true })
    album(@Parent() track: TrackResponse) {
        if (track.albumId) {
            return  this.albumService.getAlbum({
                id: track.albumId
            });
        } else {
            return null;
        }
    }
}
