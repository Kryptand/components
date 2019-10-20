import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { SalutationEntity } from '../../common-data/salutation/salutation.entity';
import { TitleEntity } from '../../common-data/title/title.entity';
import { AbstractEntity } from '../../contracts/abstract-entity';
import { AddressEntity } from './../../common-data/address/address.entity';
import { GenderEntity } from './../../common-data/gender/gender.entity';
import { FavouriteEntity } from '../../user-data/favourites/favourite.entity';

@Entity('person')
export class PersonEntity extends AbstractEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: true })
  birthName: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => GenderEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  gender: GenderEntity;

  @ManyToOne(() => AddressEntity, {
    eager: true,
    onDelete: 'NO ACTION',
    cascade: true
  })
  @JoinColumn()
  address: AddressEntity;
  @ManyToOne(() => SalutationEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  salutation: SalutationEntity;
  @ManyToOne(() => TitleEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  aristocraticTitle: TitleEntity;
  @ManyToOne(() => TitleEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  politicalTitle: TitleEntity;
  @ManyToOne(() => TitleEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  honoraryTitle: TitleEntity;
  @ManyToOne(() => TitleEntity, {
    eager: true,
    onDelete: 'NO ACTION'
  })
  @JoinColumn()
  academicTitle: TitleEntity;

  @Column({ type: 'simple-array', nullable: true })
  tags: string[];

  favourite: FavouriteEntity;
}
