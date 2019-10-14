
import { FindManyOptions, FindConditions, CreateDateColumn, UpdateDateColumn, DeepPartial, UpdateResult, DeleteResult, Repository, Like } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
export type FindManyFilter<T> = T extends AbstractEntity
  ? FindManyOptions<T> & FindConditions<T>
  : any;
export type FindOneFilter<T> = T extends AbstractEntity
  ? FindConditions<T>
  : any
  export type AbstractDocument<T> =  T extends AbstractEntity
  ? T & DeepPartial<T>
  : any;
export type UpdateResultType<T> =
   T extends AbstractEntity
  ? UpdateResult
  : any;

export type DeleteResultType<T> =
   T extends AbstractEntity
  ? DeleteResult
  : any;

export abstract class AbstractEntityService<T> {
  public abstract async find(filter: FindManyFilter<T>): Promise<T[]>;

  public abstract async findOne(filter: FindOneFilter<T>): Promise<T>;

  public abstract async findById(id: number): Promise<T>;

  public abstract async create(doc: AbstractDocument<T>): Promise<T>;

  public abstract async update(
      id: number,
      updatedDoc: AbstractDocument<T>,
  ): Promise<UpdateResultType<T>>;

  public abstract async delete(id: number): Promise<DeleteResultType<T>>;
}

export class TypeOrmCrudService<T extends AbstractEntity> extends AbstractEntityService<T> {
  protected repo: Repository<T>;

  constructor(model: Repository<T>) {
      super();
      this.repo = model;
  }

  public async find(
      filter: FindManyOptions<T> & FindConditions<T> = {},
  ): Promise<T[]> {
      return this.repo.find(filter)
    }
  public async findById(id: number): Promise<T> {
      return this.repo.findOne((id));
  }

  public async findOne(filter: FindConditions<T> = {}): Promise<T> {
      return this.repo.findOne(filter);
  }

  public async create(doc: AbstractDocument<T>): Promise<T> {
    console.debug(doc);
      return this.repo.save(doc);
  }

  public async update(
      id: number,
      updatedDoc: AbstractDocument<T>,
  ): Promise<UpdateResultType<T>> {
      return this.repo.update(id, updatedDoc as any) as unknown as UpdateResultType<T>;;
  }

  public async delete(id: number): Promise<DeleteResultType<T>> {
      return this.repo.delete(id) as unknown as DeleteResultType<T>;
  }

}
