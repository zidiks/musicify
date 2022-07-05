import { Args, Context, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GenreService } from "./genre.service";
import { Genre, PaginatedGenres } from "./models/genre.model";
import { CreateGenreInput } from "./dto/input/create-genre-input.dto";
import { ContextModel } from "../common/context.model";
import { DeleteResponse } from "../common/delete-response.model";
import { UpdateGenreInput } from "./dto/input/update-genre-input.dto";
import { GenreResponse } from "./models/genre-response.model";
import { GetAllGenresArgs } from "./dto/args/get-all-genres-args.dto";
import { DeleteArgs } from "../common/delete-args.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";

@Resolver(() => Genre)
export class GenreResolver {
    constructor(private readonly genreService: GenreService) {}

    @Mutation(() => Genre, { name: 'createGenre' })
    async createGenre(@Args('createGenreData') createGenreData: CreateGenreInput, @Context() context: ContextModel) {
        return this.genreService.createGenre(createGenreData, context.jwt);
    }

    @Mutation(() => DeleteResponse, { name: 'deleteGenre' })
    async deleteGenre(@Args() deleteGenreData: DeleteArgs, @Context() context: ContextModel) {
        return this.genreService.deleteGenre(deleteGenreData, context.jwt);
    }

    @Mutation(() => Genre, { name: 'updateGenre' })
    async updateGenre(@Args('updateGenreData') updateGenreData: UpdateGenreInput, @Context() context: ContextModel) {
        return this.genreService.updateGenre(updateGenreData, context.jwt);
    }

    @Query(() => Genre, { name: 'genre' })
    async getGenre(@Args() getGenreArgs: GetByIdArgs) {
        return this.genreService.getGenre(getGenreArgs);
    }

    @Query(() => PaginatedGenres, { name: 'genres' })
    async getAllGenres(@Args()  getAllGenresArgs: GetAllGenresArgs) {
        return this.genreService.getAllGenres(getAllGenresArgs);
    }

    @ResolveField('id', () => ID)
    getId(@Parent() genre: GenreResponse) {
        return genre._id;
    }
}
