import { PersonEntity } from './person.entity';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

export class PersonService extends TypeOrmCrudService<PersonEntity>{
  constructor( @InjectRepository(PersonEntity) private readonly PersonRepo:Repository<PersonEntity>){
    super(PersonRepo);
  }
}
