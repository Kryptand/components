import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AbstractEntityService,
  TypeOrmCrudService
} from '../contracts/abstract-entity-service';
import { AddressController } from './address/address.controller';
import { AddressEntity } from './address/address.entity';
import { AddressService } from './address/address.service';
import { GenderController } from './gender/gender.controller';
import { GenderEntity } from './gender/gender.entity';
import { GenderService } from './gender/gender.service';
import { SalutationController } from './salutation/salutation.controller';
import { SalutationEntity } from './salutation/salutation.entity';
import { SalutationService } from './salutation/salutation.service';
import { TitleController } from './title/title.controller';
import { TitleEntity } from './title/title.entity';
import { TitleService } from './title/title.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TitleEntity,

      SalutationEntity,
      GenderEntity,
      AddressEntity
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],

  providers: [
    TitleService,
    GenderService,
    SalutationService,
    AddressService,
    { provide: AbstractEntityService, useClass: TypeOrmCrudService }
  ],
  controllers: [
    TitleController,
    GenderController,
    SalutationController,
    AddressController
  ],
  exports: [TitleService, GenderService, SalutationService, AddressService]
})
export class CommonDataModule {}
