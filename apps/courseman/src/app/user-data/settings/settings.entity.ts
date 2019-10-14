import {
  Entity,
  Column,
} from 'typeorm';
import { AbstractEntity } from './../../contracts/abstract-entity';

@Entity('settings')
export class SettingsEntity extends AbstractEntity {
  @Column({ nullable: false })
  userId: string;
  @Column({type:'json'})
  setting:string;
}
