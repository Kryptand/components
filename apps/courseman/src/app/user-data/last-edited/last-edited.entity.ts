import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { AbstractEntity } from '../../contracts/abstract-entity';

@Entity('lastEdited')
export class LastEditedEntity extends AbstractEntity{

  @Column({ nullable: false })
  entityId:string;

  @Column({ nullable: false })
  entityType:string;

  @Column({ nullable: false })
  userId:string;
}
