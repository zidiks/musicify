import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistResolver } from './artist.resolver';

@Module({
  providers: [ArtistService, ArtistResolver]
})
export class ArtistModule {}
