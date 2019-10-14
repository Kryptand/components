import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person/person.entity';
import { CompanyEntity } from './company/company.entity';
import { PersonService } from './person/person.service';
import { CompanyService } from './company/company.service';
import { PersonController } from './person/person.controller';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity,CompanyEntity])],
  providers: [PersonService,CompanyService],
  controllers: [
    PersonController,CompanyController
  ],
  exports: [PersonService,CompanyService]
})
export class MasterDataModule {
}
