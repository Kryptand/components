import { Controller, Get, UseInterceptors, UseGuards } from '@nestjs/common';
import {
  Crud,
  CrudRequest,
  ParsedRequest,
  CrudRequestInterceptor
} from '@nestjsx/crud';

import { PersonEntity } from './person.entity';
import { PersonService } from './person.service';
import { AuthGuard } from '@nestjs/passport';
// @ts-ignore
PersonService.prototype.getJoinType = function getJoinType(
  relationType: string
) {
  switch (relationType) {
    case 'many-to-one':
      return 'leftJoin';

    default:
      return 'leftJoin';
  }
};
@UseGuards(AuthGuard())
@UseInterceptors(CrudRequestInterceptor)
@Crud({
  model: {
    type: PersonEntity
  },
  query: {
    join: {
      address: {
        eager: true
      },
      gender: {
        eager: true,
        allow: ['id']
      },
      academicTitle: {
        eager: true,
        allow: ['id']
      },
      honoraryTitle: {
        eager: true,
        allow: ['id']
      },
      aristocraticTitle: {
        eager: true,
        allow: ['id']
      },
      politicalTitle: {
        eager: true,
        allow: ['id']
      },
      favourite: {
        eager: true
      }
    }
  }
})
@Controller('person')
export class PersonController {
  constructor(private readonly service: PersonService) {}
  @Get('listFavourites')
  getFavourites(@ParsedRequest() req: CrudRequest) {
    return this.service.getFavourites(req);
  }
}
