import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { TranslationEntity } from './translation.entity';
import { TranslationService } from './translation.service';


@Crud({
  model: {
    type: TranslationEntity,
  },
})
@Controller('translation')
export class TranslationController {
  constructor(private readonly service1:TranslationService){
  }
}
