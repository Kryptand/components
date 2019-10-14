import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { TitleEntity } from './title.entity';
import { TitleService } from './title.service';

@Crud({
  model: {
    type: TitleEntity,
  },
})
@Controller('title')
export class TitleController{
  constructor(private readonly service:TitleService){
  }
}
