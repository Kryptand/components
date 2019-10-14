import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { SalutationEntity } from './salutation.entity';
import { SalutationService } from './salutation.service';

@Crud({
  model: {
    type: SalutationEntity
  }
})
@Controller('salutation')
export class SalutationController {
  constructor(private readonly service: SalutationService) {}
}
