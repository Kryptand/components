import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn,
  AfterUpdate,
  BeforeUpdate
} from 'typeorm';
import { AbstractEntity } from './../../contracts/abstract-entity';
import { AbstractTypedMasterDataEntity } from '../../contracts/abstract-typed-master-data-entity';
import { UserEntity } from '../user/user.entity';

@Entity('favourite')
export class FavouriteEntity extends AbstractTypedMasterDataEntity {
  @Column({ nullable: false })
  entityId: string;

  @ManyToOne(() => UserEntity, {
    eager: true,
    onDelete: 'NO ACTION',
    nullable: true
  })
  user: UserEntity;
}
