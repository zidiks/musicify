import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TrackService } from "./track.service";
import { PaginatedTracks, Track } from "./models/track.model";
import { GetTrackArgs } from "./dto/args/get-track-args.dto";
import { Genre } from "../genre/models/genre.model";
import { Band } from "../band/models/band.model";
import { TrackResponse } from "./models/track-response.model";

@Resolver(() => Track)
export class TrackResolver {
    constructor(private readonly trackService: TrackService) {}

    @Query(() => PaginatedTracks, { name: 'tracks' })
    async getAllTracks() {
        return this.trackService.getAllTracks();
    }

    @Query(() => Track, { name: 'track' })
    async getTrack(@Args() getTrackArgs: GetTrackArgs) {
        return this.trackService.getTrack(getTrackArgs)
    }

    @ResolveField('genres', () => [Genre])
    getGenres(@Parent() track: TrackResponse) {
        return [
            {
                id: 'dkjadjad',
                name: 'test name',
                description: 'test description',
                country: 'test country',
                year: 2022,
            }
        ];
    }

    @ResolveField('albums', () => [Genre])
    getAlbums(@Parent() track: TrackResponse) {
        return [
            {
                id: 'dkjadjad',
                name: 'test name',
            }
        ];
    }

    @ResolveField('bands', () => [Band])
    getBands(@Parent() track: TrackResponse) {
        return [
            {
                id: 'dkjadjad',
                name: 'test name',
                origin: 'test origin',
                members: [
                    {
                        name: 'test member'
                    }
                ],
                website: 'www',
                genres: [
                    {
                        id: 'dkjadjad',
                        name: 'test name',
                        description: 'test description',
                        country: 'test country',
                        year: 2022,
                    }
                ]
            }
        ];
    }

    @ResolveField('id', () => String)
    getId(@Parent() track: TrackResponse) {
        return track._id;
    }
}
