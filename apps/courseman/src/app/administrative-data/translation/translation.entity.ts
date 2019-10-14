import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '../../contracts/abstract-entity';

@Entity('translation')
export class TranslationEntity  extends AbstractEntity{

  @Column()
  languageId:string;

  @Column({type:'json'})
  translatedValue:string;
}
