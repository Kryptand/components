import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../contracts/abstract-entity';

@Entity('gender')
export class GenderEntity extends AbstractEntity{

  @Column({default: ''})
  label:string;
}
