import { TranslationEntity } from './translation/translation.entity';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { TypeOrmCrudService } from '../contracts/abstract-entity-service';

export class TranslationService extends TypeOrmCrudService<TranslationEntity>{
  constructor( @InjectRepository(TranslationEntity) private readonly translationRepo:Repository<TranslationEntity>){
    super(translationRepo);
  }
}
