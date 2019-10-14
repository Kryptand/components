import {
  Get,
  Query,
  InternalServerErrorException,
  Param,
  Post,
  Body,
  Delete,
  Put
} from '@nestjs/common';
import {
  AbstractDocument,
  UpdateResultType,
  DeleteResultType,
  AbstractEntityService
} from './abstract-entity-service';


export abstract class AbstractController<T> {
  protected readonly service: AbstractEntityService<T>;

  protected constructor(service: AbstractEntityService<T>) {
    this.service = service;
  }
  @Get()
  public async find(@Query('filter') filter: string): Promise<T[]> {
    const findFilter = filter ? JSON.parse(filter) : {};
    try {
      return this.service.find(findFilter);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Get(':id')
  public async findById(@Param('id') id: number): Promise<T> {
    try {
      return this.service.findById(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Post()
  public async create(@Body() doc: Partial<T>): Promise<T> {
    try {
      return this.service.create(doc as AbstractDocument<T>);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() doc: Partial<T>
  ): Promise<UpdateResultType<T>> {
    try {
      const existed = await this.service.findById(id);
      const updatedDoc = { ...(existed as any), ...(doc as any) } as any;
      return this.service.update(id, updatedDoc);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<DeleteResultType<T>> {
    try {
      return this.service.delete(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
