import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../contracts/abstract-entity';

@Entity('address')
export class AddressEntity extends AbstractEntity{

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  streetNo: string;

  @Column({ nullable: true })
  zip: string;

  @Column({ nullable: true })
  city:string

  @Column({ nullable: false })
  country:string;

  @Column({ nullable: true })
  county:string;
}
