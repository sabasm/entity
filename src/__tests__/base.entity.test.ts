import { BaseEntity } from '../abstract/base.entity';

class TestEntity extends BaseEntity {
  getEntityDetails(): string {
    return 'Test Entity Details';
  }
}

describe('BaseEntity', () => {
  let entity: TestEntity;

  beforeEach(() => {
    entity = new TestEntity();
  });

  it('should initialize with a unique ID and timestamps', () => {
    expect(entity.id).toBeDefined();
    expect(entity.createdAt).toBeInstanceOf(Date);
    expect(entity.updatedAt).toBeInstanceOf(Date);
  });

  it('should update the updatedAt timestamp', () => {
    const initialTimestamp = entity.updatedAt;
    entity.updateTimestamp();
    expect(entity.updatedAt).not.toBe(initialTimestamp);
    expect(entity.updatedAt).toBeInstanceOf(Date);
  });

  it('should return entity details', () => {
    expect(entity.getEntityDetails()).toBe('Test Entity Details');
  });
});