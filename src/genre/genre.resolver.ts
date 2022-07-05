import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GenreService } from "./genre.service";
import { Genre, PaginatedGenres } from "./models/genre.model";
import { CreateGenreInput } from "./dto/input/create-genre-input.dto";
import { ContextModel } from "../common/context.model";
import { DeleteGenreArgs } from "./dto/args/delete-genre-args.dto";
import { DeleteResponse } from "../common/delete-response.model";
import { UpdateGenreInput } from "./dto/input/update-genre-input.dto";
import { GetGenreArgs } from "./dto/args/get-genre-args.dto";
import { GenreResponse } from "./models/genre-response.model";
import { GetAllGenresArgs } from "./dto/args/get-all-genres-args.dto";

@Resolver(() => Genre)
export class GenreResolver {
    constructor(private readonly genreService: GenreService) {}

    @Mutation(() => Genre, { name: 'createGenre' })
    async createGenre(@Args('createGenreData') createGenreData: CreateGenreInput, @Context() context: ContextModel) {
        return this.genreService.createGenre(createGenreData, context.jwt);
    }

    @Mutation(() => DeleteResponse, { name: 'deleteGenre' })
    async deleteGenre(@Args() deleteGenreData: DeleteGenreArgs, @Context() context: ContextModel) {
        return this.genreService.deleteGenre(deleteGenreData, context.jwt);
    }

    @Mutation(() => Genre, { name: 'updateGenre' })
    async updateGenre(@Args('updateGenreData') updateGenreData: UpdateGenreInput, @Context() context: ContextModel) {
        return this.genreService.updateGenre(updateGenreData, context.jwt);
    }

    @Query(() => Genre, { name: 'genre' })
    async getGenre(@Args() getGenreArgs: GetGenreArgs) {
        return this.genreService.getGenre(getGenreArgs);
    }

    @Query(() => PaginatedGenres, { name: 'genres' })
    async getAllGenres(@Args()  getAllGenresArgs: GetAllGenresArgs) {
        return this.genreService.getAllGenres(getAllGenresArgs);
    }

    @ResolveField('id', () => String)
    getId(@Parent() genre: GenreResponse) {
        return genre._id;
    }
}
