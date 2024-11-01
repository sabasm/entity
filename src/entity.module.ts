import { Module, Global } from '@nestjs/common';
import { EntityService } from './entity.service';

@Global()
@Module({
  providers: [
    {
      provide: EntityService,
      useValue: EntityService.getInstance(),
    },
  ],
  exports: [EntityService],
})
export class EntityModule {}


