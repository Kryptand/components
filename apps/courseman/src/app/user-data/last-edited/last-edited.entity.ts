import { Column, Entity } from 'typeorm';
import { AbstractTypedMasterDataEntity } from '../../contracts/abstract-typed-master-data-entity';

@Entity('lastEdited')
export class LastEditedEntity extends AbstractTypedMasterDataEntity {
  @Column({ nullable: false })
  entityId: string;
  @Column({ nullable: false })
  userId: string;
}
