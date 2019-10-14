import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleEntity } from './title/title.entity';
import { SalutationEntity } from './salutation/salutation.entity';
import { GenderEntity } from './gender/gender.entity';
import { AddressEntity } from './address/address.entity';
import { TitleService } from './title/title.service';
import { GenderService } from './gender/gender.service';
import { TitleController } from './title/title.controller';
import { GenderController } from './gender/gender.controller';
import { SalutationController } from './salutation/salutation.controller';
import { AddressController } from './address/address.controller';
import { Module } from '@nestjs/common';
import { SalutationService } from './salutation/salutation.service';
import { AddressService } from './address/address.service';
import { TypeOrmCrudService, AbstractEntityService } from '../contracts/abstract-entity-service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TitleEntity,
      SalutationEntity,
      GenderEntity,
      AddressEntity
    ])
  ],

  providers: [TitleService, GenderService, SalutationService, AddressService,{ provide: AbstractEntityService, useClass: TypeOrmCrudService }],
  controllers: [
    TitleController,
    GenderController,
    SalutationController,
    AddressController
  ],
  exports: [TitleService, GenderService, SalutationService, AddressService]
})
export class CommonDataModule {}
