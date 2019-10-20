import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { TitleEntity } from './title.entity';
import { TitleService } from './title.service';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: TitleEntity
  }
})
@Controller('title')
export class TitleController {
  constructor(private readonly service: TitleService) {}
}
