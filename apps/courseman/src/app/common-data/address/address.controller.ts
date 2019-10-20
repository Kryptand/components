import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard())
@Crud({
  model: {
    type: AddressEntity
  }
})
@Controller('address')
export class AddressController {
  constructor(private readonly service: AddressService) {}
}
