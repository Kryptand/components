import { SettingsEntity } from './settings.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

export class SettingsService extends TypeOrmCrudService<SettingsEntity>{
  constructor( @InjectRepository(SettingsEntity) private readonly SettingsRepo:Repository<SettingsEntity>){
    super(SettingsRepo);
  }
}
