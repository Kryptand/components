import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { CompanyEntity } from './company.entity';
import { CompanyService } from './company.service';

@Crud({
  model: {
    type: CompanyEntity,
  },
})
@Controller('company')
export class CompanyController {
  constructor(private readonly service:CompanyService){
  }
}
