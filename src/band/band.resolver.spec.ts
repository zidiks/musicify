import { Test, TestingModule } from '@nestjs/testing';
import { BandResolver } from './band.resolver';

describe('BandResolver', () => {
  let resolver: BandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandResolver],
    }).compile();

    resolver = module.get<BandResolver>(BandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
