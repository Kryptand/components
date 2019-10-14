import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { GenderEntity } from '../gender/gender.entity';
import { GenderService } from './gender.service';

@Crud({
  model: {
    type: GenderEntity,
  },
})
@Controller('gender')
export class GenderController {
  constructor(private readonly service:GenderService){
  }
}
