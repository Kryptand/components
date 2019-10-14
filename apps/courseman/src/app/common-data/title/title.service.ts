import { TitleEntity } from './title.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

export class TitleService extends TypeOrmCrudService<TitleEntity>{
  constructor( @InjectRepository(TitleEntity) private readonly titleRepo:Repository<TitleEntity>){
    super(titleRepo);
  }
}
