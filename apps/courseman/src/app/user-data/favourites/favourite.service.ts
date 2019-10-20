import { FavouriteEntity } from './favourite.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class FavouriteService extends TypeOrmCrudService<FavouriteEntity> {
  constructor(
    @InjectRepository(FavouriteEntity)
    private readonly FavouriteRepo: Repository<FavouriteEntity>
  ) {
    super(FavouriteRepo);
  }
}
