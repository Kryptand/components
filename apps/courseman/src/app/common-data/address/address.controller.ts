import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';

@Crud({
  model: {
    type: AddressEntity
  }
})
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
}
