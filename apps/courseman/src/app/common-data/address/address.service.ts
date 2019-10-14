import { AddressEntity } from './address.entity';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export class AddressService extends TypeOrmCrudService<AddressEntity>{
  constructor( @InjectRepository(AddressEntity) private readonly addressRepo:Repository<AddressEntity>){
    super(addressRepo);
  }
}
