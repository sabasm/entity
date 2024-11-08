import { v4 as uuidv4 } from 'uuid';
import { IEntity } from '../interfaces/entity.interface';

/**
 * Abstract class BaseEntity implementing core IEntity interface.
 * Automatically sets a unique ID and timestamps on initialization.
 * Accepts an optional ID for instances where an ID is already provided.
 */
export abstract class BaseEntity implements IEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id?: string) {
        this.id = id || uuidv4(); // Use provided ID or generate a new one
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    /**
     * Enforces a method for subclasses to implement their own details.
     */
    abstract getEntityDetails(): string;

    /**
     * Updates the timestamp of the entity to the current date.
     */
    updateTimestamp(): void {
        this.updatedAt = new Date();
    }
}
