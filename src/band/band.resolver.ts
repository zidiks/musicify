import { Args, Context, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ContextModel } from "../common/context.model";
import { DeleteResponse } from "../common/delete-response.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";
import { BandService } from "./band.service";
import { CreateBandInput } from "./dto/input/create-band-input.dto";
import { UpdateBandInput } from "./dto/input/update-band-input.dto";
import { Band, PaginatedBands } from "./models/band.model";
import { GetAllBandsArgs } from "./dto/args/get-all-bands-args.dto";
import { BandResponse } from "./models/band-response.model";
import { GenreService } from "../genre/genre.service";
import { Genre } from "../genre/models/genre.model";
import { GenreResponse } from "../genre/models/genre-response.model";
import { map } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";

@Resolver(() => Band)
export class BandResolver {
    constructor(
        private readonly bandService: BandService,
        private readonly genreService: GenreService,
    ) {}

    @Mutation(() => Band, { name: 'createBand' })
    async createBand(@Args('createBandData') createBandData: CreateBandInput, @Context() context: ContextModel) {
        return this.bandService.createBand(createBandData, context.jwt);
    }

    @Mutation(() => DeleteResponse, { name: 'deleteBand' })
    async deleteBand(@Args() deleteBandData: DeleteArgs, @Context() context: ContextModel) {
        return this.bandService.deleteBand(deleteBandData, context.jwt);
    }

    @Mutation(() => Band, { name: 'updateBand' })
    async updateBand(@Args('updateBandData') updateBandData: UpdateBandInput, @Context() context: ContextModel) {
        return this.bandService.updateBand(updateBandData, context.jwt);
    }

    @Query(() => Band, { name: 'band' })
    async getBand(@Args() getBandArgs: GetByIdArgs) {
        return this.bandService.getBand(getBandArgs);
    }

    @Query(() => PaginatedBands, { name: 'bands' })
    async getAllBands(@Args()  getAllBandsArgs: GetAllBandsArgs) {
        return this.bandService.getAllBands(getAllBandsArgs);
    }

    @ResolveField('id', () => ID)
    getId(@Parent() band: BandResponse) {
        return band._id;
    }

    @ResolveField('genres', () => [Genre])
    genres(@Parent() band: BandResponse) {
        if (band.genresIds?.length) {
            return  this.genreService.getAllGenres({
                ids: band.genresIds
            }).pipe(map((res: PaginatedResponse<GenreResponse>) => res.items));
        } else {
            return [];
        }
    }
}
