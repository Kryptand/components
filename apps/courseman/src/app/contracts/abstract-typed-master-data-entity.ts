import { Entity, PrimaryGeneratedColumn, BeforeUpdate, Column } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { EntityType } from './entity-type';
@Entity()
export class AbstractTypedMasterDataEntity extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: EntityType,
    default: EntityType.PERSON
  })
  entityType: EntityType;
}
