import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person/person.entity';
import { CompanyEntity } from './company/company.entity';
import { PersonService } from './person/person.service';
import { CompanyService } from './company/company.service';
import { PersonController } from './person/person.controller';
import { CompanyController } from './company/company.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonEntity, CompanyEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [PersonService, CompanyService],
  controllers: [PersonController, CompanyController],
  exports: [PersonService, CompanyService]
})
export class MasterDataModule {}
