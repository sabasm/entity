import { Test, TestingModule } from '@nestjs/testing';
import { EntityModule } from '../entity.module';
import { EntityService } from '../entity.service';

describe('EntityModule', () => {
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [EntityModule],
    }).compile();
  });

  it('should provide EntityService as a global singleton', () => {
    const entityService = moduleRef.get<EntityService>(EntityService);
    expect(entityService).toBeInstanceOf(EntityService);
  });
});
