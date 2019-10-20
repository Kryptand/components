import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { SalutationEntity } from './salutation.entity';
import { SalutationService } from './salutation.service';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: SalutationEntity
  }
})
@Controller('salutation')
export class SalutationController {
  constructor(private readonly service: SalutationService) {}
}
