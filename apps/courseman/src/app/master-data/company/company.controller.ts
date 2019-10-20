import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { CompanyEntity } from './company.entity';
import { CompanyService } from './company.service';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: CompanyEntity
  }
})
@Controller('company')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}
}
