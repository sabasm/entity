import { EntityService } from '../entity.service'
import { BaseEntity } from '../abstract/base.entity'

class TestEntity extends BaseEntity {
    getEntityDetails(): string {
        return 'Test Entity'
    }
}

describe('EntityService', () => {
    let entityService: EntityService

    beforeEach(() => {
        entityService = EntityService.getInstance()
    })

    it('should create an instance of EntityService', () => {
        expect(entityService).toBeInstanceOf(EntityService)
    })

    it('should add and retrieve entities', () => {
        const entity = new TestEntity()
        entityService.addEntity(entity)
        const entities = entityService.getEntities()
        expect(entities.length).toBe(1)
        expect(entities[0]).toBe(entity)
    })
})


