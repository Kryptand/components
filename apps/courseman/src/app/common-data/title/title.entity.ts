import { Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../contracts/abstract-entity';
import { GenderEntity } from '../gender/gender.entity';

export enum TitleType {
  POLITICAL = 'political',
  ARISTOCRATIC = 'aristocratic',
  HONORARY = 'honorary',
  ACADEMIC = 'academic'
}
@Entity('title')
export class TitleEntity extends AbstractEntity {
  @Column({ nullable: false })
  label: string;

  @ManyToOne(() => GenderEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  gender: GenderEntity;

  @Column({
    type: 'enum',
    enum: TitleType,
    default: TitleType.ACADEMIC
  })
  type: TitleType;
}
