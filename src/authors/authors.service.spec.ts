import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  let service: AuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorsService, PrismaService],
    }).compile();

    service = module.get<AuthorsService>(AuthorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
