import { Args, Context, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BandService } from "../band/band.service";
import { Band } from "../band/models/band.model";
import { ContextModel } from "../common/context.model";
import { DeleteResponse } from "../common/delete-response.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";
import { BandResponse } from "../band/models/band-response.model";
import { map } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { ArtistService } from "./artist.service";
import { CreateArtistInput } from "./dto/input/create-artist-input.dto";
import { Artist, PaginatedArtists } from "./models/artist.model";
import { UpdateArtistInput } from "./dto/input/update-artist-input.dto";
import { GetAllArtistsArgs } from "./dto/args/get-all-artists-args.dto";
import { ArtistResponse } from "./models/artist-response.model";

@Resolver(() => Artist)
export class ArtistResolver {
    constructor(
        private readonly artistService: ArtistService,
        private readonly bandService: BandService,
    ) {}

    @Mutation(() => Artist, { name: 'createArtist' })
    async createArtist(@Args('createArtistData') createArtistData: CreateArtistInput, @Context() context: ContextModel) {
        return this.artistService.createArtist(createArtistData, context.jwt);
    }

    @Mutation(() => DeleteResponse, { name: 'deleteArtist' })
    async deleteArtist(@Args() deleteArtistData: DeleteArgs, @Context() context: ContextModel) {
        return this.artistService.deleteArtist(deleteArtistData, context.jwt);
    }

    @Mutation(() => Artist, { name: 'updateArtist' })
    async updateArtist(@Args('updateArtistData') updateArtistData: UpdateArtistInput, @Context() context: ContextModel) {
        return this.artistService.updateArtist(updateArtistData, context.jwt);
    }

    @Query(() => Artist, { name: 'artist' })
    async getArtist(@Args() getArtistArgs: GetByIdArgs) {
        return this.artistService.getArtist(getArtistArgs);
    }

    @Query(() => PaginatedArtists, { name: 'artists' })
    async getAllArtists(@Args()  getAllArtistsArgs: GetAllArtistsArgs) {
        return this.artistService.getAllArtists(getAllArtistsArgs);
    }

    @ResolveField('id', () => ID)
    getId(@Parent() artist: ArtistResponse) {
        return artist._id;
    }

    @ResolveField('bands', () => [Band], { nullable: 'itemsAndList' })
    genres(@Parent() artist: ArtistResponse) {
        if (artist.bandsIds?.length) {
            return  this.bandService.getAllBands({
                ids: artist.bandsIds
            }).pipe(map((res: PaginatedResponse<BandResponse>) => res.items));
        } else {
            return [];
        }
    }
}
