import { CompanyEntity } from './company.entity';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

export class CompanyService extends TypeOrmCrudService<CompanyEntity>{
  constructor( @InjectRepository(CompanyEntity) private readonly CompanyRepo:Repository<CompanyEntity>){
    super(CompanyRepo);
  }
}
