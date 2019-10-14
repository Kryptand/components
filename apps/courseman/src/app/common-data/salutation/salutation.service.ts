import { SalutationEntity } from './salutation.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Controller } from '@nestjs/common';
@Controller('salutation')
export class SalutationService extends TypeOrmCrudService<SalutationEntity>{
  constructor( @InjectRepository(SalutationEntity) private readonly salutationRepo:Repository<SalutationEntity>){
    super(salutationRepo);
  }
}
