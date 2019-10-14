import { Column, Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

import { AddressEntity } from '../../common-data/address/address.entity';
import { AbstractEntity } from './../../contracts/abstract-entity';

@Entity('company')
export class CompanyEntity extends AbstractEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  sector: string;

  @Column({ nullable: true })
  department: string;

  @ManyToOne(() => AddressEntity,{
    eager:true,
    onDelete:'NO ACTION',
    cascade:true
 })
 @JoinColumn()
  address: AddressEntity;
}
