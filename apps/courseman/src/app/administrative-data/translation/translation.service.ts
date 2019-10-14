import { TranslationEntity } from './translation.entity';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export class TranslationService extends TypeOrmCrudService<TranslationEntity>{
  constructor( @InjectRepository(TranslationEntity) private readonly translationRepo:Repository<TranslationEntity>){
    super(translationRepo);
  }
}
