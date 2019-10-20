import { PersonEntity } from './person.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import {
  GetManyDefaultResponse,
  CrudRequest,
  CrudRequestOptions
} from '@nestjsx/crud';
import { EntityType } from '../../contracts/entity-type';
import { ParsedRequestParams } from '@nestjsx/crud-request';

export class PersonService extends TypeOrmCrudService<PersonEntity> {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly PersonRepo: Repository<PersonEntity>
  ) {
    super(PersonRepo);
  }

  async getOne(req: CrudRequest): Promise<PersonEntity> {
    const { parsed, options } = req;
    const builder = await this.createBuilder(parsed, options);
    builder.leftJoinAndMapOne(
      'PersonEntity.favourite',
      'FavouriteEntity',
      'FavouriteEntity',
      'PersonEntity.id=FavouriteEntity.entityId and FavouriteEntity.entityType = :entityType',
      {
        entityType: EntityType.PERSON
      }
    );
    const found = await builder.getOne();
    if (!found) {
      this.throwNotFoundException('PersonEntity');
    }
    return found;
  }
  async buildFavouriteRequestBuilder(
    parsed: ParsedRequestParams,
    joinCallback: Function,
    options: CrudRequestOptions
  ) {
    const builder = await this.createBuilder(parsed, options);
    joinCallback(builder);
    return builder;
  }
  async makePaginatedFavouriteRequest(
    req: CrudRequest,
    builderCallback: Function
  ) {
    const { parsed, options } = req;
    const builder = await this.createBuilder(parsed, options);
    this.buildFavouriteRequestBuilder(
      parsed,
      builderCallback(builder),
      options
    );
    if (this.decidePagination(parsed, options)) {
      const [data, total] = await builder.getManyAndCount();
      const limit = builder.expressionMap.take;
      const offset = builder.expressionMap.skip;
      return this.createPageInfo(data, total, limit, offset);
    }
    return builder.getMany();
  }
  async getFavourites(req: CrudRequest) {
    return this.makePaginatedFavouriteRequest(req, builder =>
      builder.innerJoinAndMapOne(
        'PersonEntity.favourite',
        'FavouriteEntity',
        'FavouriteEntity',
        'PersonEntity.id=FavouriteEntity.entityId and FavouriteEntity.entityType = :entityType',
        {
          entityType: EntityType.PERSON
        }
      )
    );
  }
  async getLastEdited(req: CrudRequest) {}
  async getMany(
    req: CrudRequest
  ): Promise<GetManyDefaultResponse<PersonEntity> | PersonEntity[]> {
    return this.makePaginatedFavouriteRequest(req, builder =>
      builder.leftJoinAndMapOne(
        'PersonEntity.favourite',
        'FavouriteEntity',
        'FavouriteEntity',
        'PersonEntity.id=FavouriteEntity.entityId and FavouriteEntity.entityType = :entityType',
        {
          entityType: EntityType.PERSON
        }
      )
    );
  }
}
