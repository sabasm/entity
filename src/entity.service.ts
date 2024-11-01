import { BaseEntity } from './abstract/base.entity';

export class EntityService {
  private static instance: EntityService;
  private entities: BaseEntity[] = [];

  private constructor() {}

  static getInstance(): EntityService {
    if (!EntityService.instance) {
      EntityService.instance = new EntityService();
    }
    return EntityService.instance;
  }

  addEntity(entity: BaseEntity): void {
    this.entities.push(entity);
  }

  getEntities(): BaseEntity[] {
    return this.entities;
  }
}


