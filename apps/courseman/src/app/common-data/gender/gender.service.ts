import { GenderEntity } from './gender.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Controller } from '@nestjs/common';
@Controller('gender')
export class GenderService extends TypeOrmCrudService<GenderEntity>{
  constructor( @InjectRepository(GenderEntity) private readonly GenderRepo:Repository<GenderEntity>){
    super(GenderRepo);
  }
}
