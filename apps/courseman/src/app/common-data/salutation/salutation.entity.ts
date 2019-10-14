import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { AbstractEntity } from './../../contracts/abstract-entity';
import { GenderEntity } from '../gender/gender.entity';

@Entity('salutation')
export class SalutationEntity extends AbstractEntity {
  @Column({ nullable: false })
  label: string;

  @ManyToOne(() => GenderEntity,{
   eager:true,
   onDelete:'NO ACTION'
})
  @JoinColumn()
  gender: GenderEntity;

}
