import { Controller, Request, UseGuards } from '@nestjs/common';
import {
  Crud,
  CrudAuth,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
  CreateManyDto,
  CrudController
} from '@nestjsx/crud';

import { FavouriteEntity } from './favourite.entity';
import { FavouriteService } from './favourite.service';
import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: FavouriteEntity
  }
})
@CrudAuth({
  filter: (user: UserEntity) => ({
    id: user.id
  }),
  persist: (user: UserEntity) => ({
    username: user.username
  })
})
@Controller('favourite')
export class FavouriteController implements CrudController<FavouriteEntity> {
  constructor(public readonly service: FavouriteService) {}
  get base(): CrudController<FavouriteEntity> {
    return this;
  }
  @Override()
  createOne(
    @Request() raw: Request,
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: FavouriteEntity
  ) {
    console.debug((raw as any).user);
    // dto.user = req.body.user;
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<FavouriteEntity>
  ) {
    return this.base.createManyBase(req, dto);
  }
}
